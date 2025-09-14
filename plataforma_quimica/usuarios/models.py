from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    edad = models.IntegerField()

    def _str_(self):
        return self.nombre