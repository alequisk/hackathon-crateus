function login(email, password) {

}

function addProducts(id, name, price, quantity) {

}

class editProduct {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", price: "" };
    this.setId = this.setId.bind(this);
    this.setName = this.setName.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setid(e) {
    this.setState({ id: e.target.value });
  }
  setname(e) {
    this.setState({ name: e.target.value });
  }
  setCapacidade(e) {
    this.setState({ price: e.target.value });
  }
  componentDidMount() {
    axios
      .get("" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onSubmit(e) {
    e.preventDefault();
    const productAtt = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
    };
    axios
      .put(
        "" + this.props.match.params.id,
        productAtt
      )
      .then((response) => {
        this.props.history.push("/list");
      })
      .catch((error) => console.log(error));
  }
}

function listProducts(id, name, price, quantity) {
  // to do
}

function listSellers() {
  // to do
}

function cadastar(name, email, password, number) {

}