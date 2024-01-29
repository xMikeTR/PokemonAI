from django.db import models

class Data(models.Model):
    PokemonA_Type = models.CharField(max_length=255)
    PokemonB_Type = models.CharField(max_length=255)
    prediction_result = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.PokemonA_Type} vs {self.PokemonB_Type}"
