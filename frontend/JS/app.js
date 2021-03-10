function login(email, password) {

}

function addProducts(id, name, price, quantity) {

}

class editProduct {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", price: "", descrition: "", quantity:"" };
    this.setId = this.setId.bind(this);
    this.setName = this.setName.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setId(e) {
    this.setState({ id: e.target.value });
  }
  setName(e) {
    this.setState({ name: e.target.value });
  }
  setPrice(e) {
    this.setState({ price: e.target.value });
  }
  setDescription(e) {
    this.setState({ description: e.target.value});
  }
  setQuantity(e) {
    this.setState({ quantity: e.target.value});
  }

  componentDidMount() {
    axios
      .get("" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          description: response.data.price,
          quantity: response.data.quantity,
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
      description: this.state.descrition,
      quantity: this.state.descrition,
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