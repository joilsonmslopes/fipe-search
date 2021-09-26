
import React from "react";
import Document, {
    DocumentContext, 
    DocumentInitialProps, 
    Head, 
    Html, 
    Main, 
    NextScript
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })
    
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />

                    <meta property="og:title" content="Tabela Fipe" />
                    <meta property="og:site_name" content="Tabela Fipe" />
                    <meta property="og:description" content="Consulte o valor de um veículo de forma gratuita." />
                    <meta property="og:image" content="/placeholder-facebook-meta.jpg" />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:site" content="Tabela Fipe" />
                    <meta name="twitter:title" content="Tabela Fipe" />
                    <meta name="twitter:description" content="Consulte o valor de um veículo de forma gratuita." />
                    <meta name="twitter:image" content="/placeholder-facebook-meta.jpg" />
                    <meta name="twitter:card" content="summary" />

                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}