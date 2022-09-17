class App extends Component {
    render() {
      return (
        <Layout>
          <Header />
          <Navigation />
          <Content>
            <Sidebar></Sidebar>
            <Router />
          </Content>
          <Footer></Footer>
        </Layout>
      );
    }
  }