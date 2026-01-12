from django.shortcuts import render, get_object_or_404
from .models import Post

# Chamada para titulos conteúdo meta descrição.

def home(request):
    posts = Post.objects.all().order_by('-data_criacao')
    return render(request, 'blog/home.html', {'posts': posts})


# Chamada para os detalhes dos posts
def post_detalhe(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'blog/post_detalhe.html', {'post': post})
