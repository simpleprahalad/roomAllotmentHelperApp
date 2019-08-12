import React from 'react'
import {nameList} from './finalData'
import CardList from './CardList';

class Search extends React.Component {
    constructor() {
        super();
        this.dataArray = [];
        this.filteredRobots = [];
        this.state = {
            searchByName : "",
            searchByMid : "",
            searchByRoomNum : []
        }
    }

    handleSearchByMid = (event) => {
        this.setState({searchByMid : event.target.value })
    }

    handleSearchByName = (event) => {
        this.setState({searchByName : event.target.value })
    }

    handleSearchByRoomNum = (event) => {
        this.setState({searchByRoomNum : event.target.value })
    }

    componentDidMount() {
        // this.generateObjectKeysArray()
        this.dataArray = nameList;
    }

    // generateObjectKeysArray() {
    //     var columnNames = nameList[0],
    //         finalObjArray = [],
    //         obj = {},
    //         key;
    //     for ( var i = 1; i < nameList.length; i++ ) {
    //         obj = {};
    //         for ( var j = 0; j<columnNames.length; j++) {
    //             key = columnNames[j];
    //             obj[key] = nameList[i][j] || "N/A";
    //         }
    //         finalObjArray.push(obj);
    //     }
    //     this.dataArray = finalObjArray;
    // }

    extractName = () => {
        var result = "";
        this.filteredRobots = [];
        if(this.state.searchByMid !== "" && this.state.searchByMid.length < 6) {
            result = this.dataArray.filter(obj => {
                return obj["M-ID"].toLowerCase().includes(this.state.searchByMid.toLowerCase());
            })
            this.filteredRobots = result;
        } else if(this.state.searchByName !== "") {
            result = this.dataArray.filter(obj => {
                return obj["First Name"].toLowerCase().includes(this.state.searchByName.toLowerCase());
            })
            this.filteredRobots = result;
        } else if(this.state.searchByRoomNum !== "") {
            result = this.dataArray.filter(obj => {
                return obj["Hotel Room"].toLowerCase().includes(this.state.searchByRoomNum.toLowerCase());
            })
            this.filteredRobots = result;
        }
        console.log(this.filteredRobots.length)
    }

    render() {
        this.extractName();
        return (
            <div className="pa2">
                <input 
                    className="pa3 ba b--green bg-lightest-blue"
                    type="search" 
                    placeholder="search by mid"
                    onChange={this.handleSearchByMid}
                    >
                </input>
                <input 
                    className="pa3 ba b--green bg-lightest-blue"
                    type="search" 
                    placeholder="search by name"
                    onChange={this.handleSearchByName}
                    >
                </input>
                <input 
                    className="pa3 ba b--green bg-lightest-blue"
                    type="search" 
                    placeholder="search by room number"
                    onChange={this.handleSearchByRoomNum}
                    >
                </input>
                <br />
                <CardList robots={this.filteredRobots}/>
            </div>
        )
    }
}

export default Search