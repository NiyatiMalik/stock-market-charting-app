import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AdminDashboard from "./AdminDashboard";
import DataService from "./DataService";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = withStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

export default class UpdateCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      companyId: this.props.match.params.companyId,
      ceo: "",
      boardOfDirectors: "",
      companyBrief: "",
      sectorName: "",
      turnover: "",
      errorMsg: "",
      companyDetails: [],
      sectorsList: [],
    };
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleBoardOfDirectorsChange =
      this.handleBoardOfDirectorsChange.bind(this);
    this.handleCeoChange = this.handleCeoChange.bind(this);
    this.handleCompanyBriefChange = this.handleCompanyBriefChange.bind(this);
    this.handleTurnoverChange = this.handleTurnoverChange.bind(this);
    this.handleSectorNameChange = this.handleSectorNameChange.bind(this);
    this.updateThisCompany = this.updateThisCompany.bind(this);
    this.getCompanyDetails = this.getCompanyDetails.bind(this);
    this.getAllSectors = this.getAllSectors.bind(this);
  }

  componentDidMount() {
    this.getCompanyDetails(this.props.match.params.companyId);
    this.getAllSectors();
  }

  getAllSectors() {
    DataService.retriveSectorList()
      .then((response) => {
        console.log(response);
        this.setState({ sectorsList: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving sector list" });
      });
  }

  getCompanyDetails(companyId) {
    DataService.retrieveCompanyDetails(companyId)
      .then((response) => {
        console.log(response);
        this.setState({ companyDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Company details" });
      });
  }

  handleCompanyChange(e) {
    console.log(e.target.value);
    this.setState({
      companyName: e.target.value,
    });
  }
  handleCeoChange(e) {
    console.log(e.target.value);
    this.setState({
      ceo: e.target.value,
    });
  }
  handleBoardOfDirectorsChange(e) {
    console.log(e.target.value);
    this.setState({
      boardOfDirectors: e.target.value,
    });
  }
  handleCompanyBriefChange(e) {
    console.log(e.target.value);
    this.setState({
      companyBrief: e.target.value,
    });
  }
  handleSectorNameChange(e) {
    console.log(e.target.value);
    this.setState({
      sectorName: e.target.value,
    });
  }
  handleTurnoverChange(e) {
    console.log(e.target.value);
    this.setState({
      turnover: e.target.value,
    });
  }

  updateThisCompany() {
    var data = {
      companyName: this.state.companyName
        ? this.state.companyName
        : this.state.companyDetails.companyName,

      ceo: this.state.ceo ? this.state.ceo : this.state.companyDetails.ceo,

      boardOfDirectors: this.state.boardOfDirectors
        ? this.state.boardOfDirectors
        : this.state.companyDetails.boardOfDirectors,

      companyBrief: this.state.companyBrief
        ? this.state.companyBrief
        : this.state.companyDetails.companyBrief,

      sectorName: this.state.sectorName
        ? this.state.sectorName
        : this.state.companyDetails.sectorName,

      turnover: this.state.turnover
        ? this.state.turnover
        : this.state.companyDetails.turnover,
      companyId: this.state.companyId,
    };
    DataService.updateACompany(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error updating company" });
        console.log(this.state.errorMsg);
      });
  }

  render() {
    return (
      <div>
        <AdminDashboard />
        <div className="addCompany">
          <div className="updateCompanyForm">
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-basic"
                  label="Company Name"
                  value={
                    this.state.companyName
                      ? this.state.companyName
                      : this.state.companyDetails.companyName
                  }
                  onChange={this.handleCompanyChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="CEO"
                  value={
                    this.state.ceo
                      ? this.state.ceo
                      : this.state.companyDetails.ceo
                  }
                  onChange={this.handleCeoChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Board of Directors"
                  value={
                    this.state.boardOfDirectors
                      ? this.state.boardOfDirectors
                      : this.state.companyDetails.boardOfDirectors
                  }
                  onChange={this.handleBoardOfDirectorsChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Company Brief"
                  value={
                    this.state.companyBrief
                      ? this.state.companyBrief
                      : this.state.companyDetails.companyBrief
                  }
                  onChange={this.handleCompanyBriefChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div>
                <InputLabel id="demo-simple-select-label">
                  Select Sector
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // name="Sector"
                  value={this.state.companyDetails.sectorName}
                  onChange={this.handleSectorNameChange}
                >
                  {this.state.sectorsList.map((item) => (
                    <MenuItem value={item.sectorName}>
                      {item.sectorName}
                    </MenuItem>
                  ))}
                </Select>

                {/* <TextField
                  id="standard-basic"
                  label="Sector Name"
                  value={
                    this.state.sectorName
                      ? this.state.sectorName
                      : this.state.companyDetails.sectorName
                  }
                  onChange={this.handleSectorNameChange}
                /> */}
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Turnover"
                  value={
                    this.state.turnover
                      ? this.state.turnover
                      : this.state.companyDetails.turnover
                  }
                  onChange={this.handleTurnoverChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.updateThisCompany()}
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
