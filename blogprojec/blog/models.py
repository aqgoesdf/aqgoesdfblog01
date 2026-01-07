from django.db import models

# Create your models here.
class Post(models.Model):
    titulo = models.CharField(max_length=200)
    resumo = models.CharField(
    max_length=200,
    default='Resumo não informado'
)
    conteudo = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __STR__(self):
        return self.titulo