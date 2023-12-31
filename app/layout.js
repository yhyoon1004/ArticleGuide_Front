import Script from "next/script";
import '../public/template.css'
import Navigation from "@/app/component/navigation";
import SideBar from "@/app/component/sideBar";
import IndexBreadCrumbs from "@/app/component/indexBreadCrumbs";

export const metadata = {
    title: 'Article Guide',
    description: 'Be The Journalist',
}

const mainTitle = "Article Guide";


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <title>Article Guide</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"/>
            <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"></Script>
        </head>
        <body>
        <Navigation title={mainTitle}/>
        <div id="layoutSidenav">
            <SideBar/>
            <div id="layoutSidenav_content">
                <main>
                    {/*<IndexBreadCrumbs/>*/}
                {children}
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; https://github.com/yhyoon1004/ArticleGuide_Front</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </body>
        </html>
    )
}
