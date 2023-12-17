import MainLayout from "./components/layouts/MainLayout";

function App({ Component, pageProps, ...appProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App