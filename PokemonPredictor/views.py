from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Data
from .serializer import DataSerializer
import joblib
import json


@api_view(['GET'])
def getData(request):
    app = Data.objects.all()
    serializer = DataSerializer(app, many=True)
    return Response(serializer.data)
@api_view(['POST'])
def postData(request):
    model = joblib.load('/home/mike/Coding_Projects/JS_Projects/Vite/PokemonDev/PokemonModel.pkl')

    serializer = DataSerializer(data=request.data)
    if serializer.is_valid():
        input_data = [serializer.validated_data['PokemonA_Type'], serializer.validated_data['PokemonB_Type']]

        try:
            predictions = model.predict([input_data])
            prediction_result = predictions[0]  # Assuming a single prediction for simplicity
            print("Predicted result:", prediction_result)
        except Exception as e:
            print("Error during prediction:", e)
            return Response({'error': str(e)}, status=500)
        serializer.save(prediction_result=prediction_result)

        return Response({'prediction_result': prediction_result})
    else:
        return Response(serializer.errors, status=400)