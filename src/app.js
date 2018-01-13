


class AddTicket extends React.Component {
  render() {
    return (
      <div>
        <h1>Add New Ticket</h1>
        <InputField />
      </div>
    );
  }
}

class InputField extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>Title</div>
          <input />
        </form>
        <form>
          <div>Description</div>
          <input />
        </form>
        <form>
          <div>Assignee</div>
          <input />
        </form>
        <form>
          <div>Criticality</div>
          <input />
        </form>
        <button>Submit</button>
        <button>Cancel</button>
      </div>
    );
  }
}

ReactDOM.render(<AddTicket />, document.getElementById('app'))
