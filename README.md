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

<p>In Next.js, the fallback key in the getStaticPaths function is crucial for handling dynamic routes when using Static Site Generation (SSG). It determines the behavior of the Next.js server when a request is made for a path that has not been generated at build time. There are three possible values for fallback: <strong>false</strong>, <strong>true</strong>, and <strong>'blocking' (should be a string)</strong>.</p>

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

### fallback: false

<p>When you set fallback to false, any paths not returned by getStaticPaths will result in a 404 page. This means you are telling Next.js that it should only render the pages for the paths returned by getStaticPaths at build time.</p>
<p>This is a good option if you know all the required paths beforehand and don't need to handle new paths after the build.</p>

### fallback: true:

<p>Setting fallback to true allows Next.js to serve a fallback version of the page to the user (a loading state, for example) while it statically generates the requested path in the background.
Once the page is generated, Next.js replaces the fallback with the full page. This process only happens once per path; after a path is generated, it's served like any other statically generated page.</p>
<p>This is useful when you have a large number of pages and want to generate only a subset at build time, generating the rest on-demand.</p>

### fallback: 'blocking':

<p>With fallback: 'blocking', Next.js will statically generate the requested path on the server upon the first request. The user will have to wait until this process is complete, after which the generated page is served.</p>
<p>The difference from true is that the user does not see a fallback state; they only see the final page once it's fully generated.</p>
<p>This is a good choice if you want all users to see the complete page immediately and can afford a delay for the first visitor to each path.</p>
