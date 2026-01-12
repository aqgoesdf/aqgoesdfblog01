from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    resumo = models.CharField(max_length=200)
    conteudo = models.TextField()
    imagem = models.ImageField(upload_to='posts/', blank=True, null=True)
    data_criacao = models.DateTimeField(auto_now_add=True)



    def save(self, *args, **kwargs):
        if not self.slug:
            slug_base = slugify(self.titulo)
            slug = slug_base
            contador = 1

            while Post.objects.filter(slug=slug).exists():
                slug = f"{slug_base}-{contador}"
                contador += 1

            self.slug = slug

        super().save(*args, **kwargs)

    def __str__(self):
        return self.titulo
