from rest_framework import serializers
from django.shortcuts import render


class StockPredictionSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)
    