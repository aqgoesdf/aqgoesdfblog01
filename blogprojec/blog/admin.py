from django.contrib import admin

# Register your models here.
from .models import Post

# Atualização do admin para resumo dos posts
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_criacao')

