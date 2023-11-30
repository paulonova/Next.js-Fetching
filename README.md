# Some Studies about Next JS

## Getting Started

First, run the development server:

```bash
npm run dev
```

## NotFound

> {notFound: true}

<p>Em Next.js, {notFound: true} é usado dentro da função getServerSideProps ou getStaticProps para indicar que a página não deve ser renderizada e que o Next.js deve mostrar a página 404 padrão ou uma página 404 personalizada.</p>

<p>Quando você retorna {notFound: true} de getServerSideProps ou getStaticProps, o Next.js entende que não foi possível encontrar os dados necessários para renderizar a página ou que a página não existe. Isso é especialmente útil para casos onde você depende de dados externos para exibir a página, como dados de um CMS ou API. </p>

```bash
if (!data) {
    // Retorna notFound: true se os dados não forem encontrados
    return { notFound: true };
  }
```

## Redirect

```bash
if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
```

<p>In Next.js, when you return an object with the redirect property from getServerSideProps or getStaticProps, it instructs Next.js to redirect the user to a different destination. The destination key within the redirect object specifies the URL to which the user should be redirected.</p>

## Fallback in getStaticPaths()

<p>In Next.js, the fallback key in the getStaticPaths function is crucial for handling dynamic routes when using Static Site Generation (SSG). It determines the behavior of the Next.js server when a request is made for a path that has not been generated at build time. There are three possible values for fallback: <strong>false</strong>, <strong>true</strong>, and <strong>blocking</strong>.</p>

```bash
  return {
    paths: [
      { params: { id: "p1" } },
      { params: { id: "p2" } },
      { params: { id: "p3" } },
    ],
    fallback: false,
  };
```

```bash
  return {
    paths: [
      { params: { id: "p1" } }
    ],
    fallback: true,
  };
```
