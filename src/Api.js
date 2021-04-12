const BASE_API = "https://tbfinal.herokuapp.com";

export async function signUp(Nome, Email, Senha) {
  const req = await fetch(`${BASE_API}/api/usuarios`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Nome, Email, Senha }),
  });
  if(req.status === 200){
  const json = await req.json();
  return json;
  }else{
    return null
  }
}

export async function signIn(Email, Senha) {
  const req = await fetch(`${BASE_API}/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Email, Senha }),
  });
  if (req.status === 200) {
    const json = await req.json();
    return json;
  }else{
      return null
  }
}

export async function getTrending() {
  const req = await fetch(`${BASE_API}/api/artigos/trending`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}

export async function getTrendingTopic(topicName) {
  const req = await fetch(
    `${BASE_API}/api/artigos/trending?Categoria=${topicName}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  return json;
}

export async function getFeed() {
  const req = await fetch(`${BASE_API}/api/artigos/feed`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

  });
  const json = await req.json();
  return json;
}

export async function getFeedTopic(topicName) {
  const req = await fetch(
    `${BASE_API}/api/artigos/feed?Categoria=${topicName}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  return json;
}
export async function getFeedSearch(search) {
  const req = await fetch(
    `${BASE_API}/api/artigos/feed?texto=${search}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  return json;
}

export async function getArticleByID(id) {
  const req = await fetch(`${BASE_API}/api/artigos/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}

export async function getCommentsByID(id){
  const req = await fetch(`${BASE_API}/api/artigos/${id}/comentarios`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}

export async function saveComment(usuarioId, usuarioNome, artigoId, texto) {
  const req = await fetch(`${BASE_API}/api/comentarios`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({  usuarioId, usuarioNome, artigoId,texto}),
  });
  if (req.status === 200) {
    const json = await req.json();
    return json;
  }else{
      return null
  }
}

export async function deleteArticleByID(id) {
  const req = await fetch(`${BASE_API}/api/artigos/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (req.status === 200) {
    const json = await req.json();
    return json;
  }else{
      return null
  }
}


export async function getUserArticleByID(id) {
  const req = await fetch(`${BASE_API}/api/usuarios/${id}/artigos`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}


export async function geUserByID(id) {
  const req = await fetch(`${BASE_API}/api/usuarios/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}

export async function saveArticle(titulo, descricao, conteudo, categoria,autorId) {
  const req = await fetch(`${BASE_API}/api/artigos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ titulo, descricao, conteudo, categoria,autorId}),
  });
  if (req.status === 200) {
    const json = await req.json();
    return json;
  }else{
      return null
  }
}

export async function putArticle(id , titulo, descricao, conteudo, categoria,autorId) {
  const req = await fetch(`${BASE_API}/api/artigos/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id, titulo, descricao, conteudo, categoria,autorId}),
  });
  if (req.status === 200) {
    const json = await req.json();
    return json;
  }else{
      return null
  }
}


export async function getisLiked(usuarioId,artigoId) {
  const req = await fetch(`${BASE_API}/api/isliked?usuarioId=${usuarioId}&artigoId=${artigoId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}

export async function unlike(usuarioId,artigoId){
  const req = await fetch(`${BASE_API}/api/unlike?usuarioId=${usuarioId}&artigoId=${artigoId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}

export async function like(usuarioId,artigoId){
  const req = await fetch(`${BASE_API}/api/like?usuarioId=${usuarioId}&artigoId=${artigoId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json;
}