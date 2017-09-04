import React, {Component} from 'react';
import './App.css';
import getSortFunc from './functions/sort';
import initialState from './functions/initialState';
class App extends Component {
    constructor(props) {
        super(props);

        this.__state = initialState;
        this.state = this.__state;

        console.log(this.__state, this.state);


    }

    sort(e) {
        let param = e.target.getAttribute("data-type");
        let type = this.state.sorting.type;

        if (this.state.sorting.param == param){
            console.log('params true');
            if( type == 'ASC' ){
                console.log('type == ASC');
                type = 'DESC';
            } else {
                console.log('type == DESC');
                type = 'ASC'
            }
        } else {
            type = 'ASC'
        }

        console.log(type);
        let newState = this.state.items.sort(getSortFunc(param,type));
        this.setState({
            items: newState,
            sorting:{param:param,type:type}
        });
    }

    filter(e){
        let param = e.target.getAttribute("data-category");
        let flag = true;
        let filterNewArr = this.state.filterArr.filter(val => {
            if( val === param ){
                flag = false;
                return false;
            }
            return true;
        })


        if (flag){
            filterNewArr.push(param);
        }

        let filterItems = this.__state.items.filter(val => {
            let flag = true;
            filterNewArr.forEach(item =>{
                if(item === val.type){
                    flag = false;
                }
            });

            if(flag){
                return true;
            } else {
                return false
            }
        })

        this.setState({
            items:filterItems,
            filterArr:filterNewArr,
        })
    }

    render() {
        return (
            <div className="App">
                <svg width="100" height="30">
                    <mask id="mask" x="0" y="0">
                        <path fill="#fff" d="M10 5L16 25L0  13L20  13L4  25L10 5"/>
                        <path fill="#fff" d="M30 5L36 25L20 13L40  13L24 25L30 5"/>
                        <path fill="#fff" d="M50 5L56 25L40 13L60  13L44 25L50 5"/>
                        <path fill="#fff" d="M70 5L76 25L60 13L80  13L64 25L70 5"/>
                        <path fill="#fff" d="M90 5L96 25L80 13L100 13L84 25L90 5"/>
                    </mask>
                </svg>
                <section className="filter-block">
                    <p className="title">Filter</p>
                    <ul>
                        <li>
                            <input type="checkbox" data-category="phone" defaultChecked onChange={this.filter.bind(this)}/>
                            <p>Phone</p>
                        </li>
                        <li>
                            <input type="checkbox" data-category="notebook"  defaultChecked onChange={this.filter.bind(this)}/>
                            <p>NoteBook</p>
                        </li>
                        <li>
                            <input type="checkbox" data-category="tablet" defaultChecked onChange={this.filter.bind(this)}/>
                            <p>Tablet</p>
                        </li>
                    </ul>
                </section>
                <section className="content">
                    <p className="title">Item List</p>
                    <div className="table js-table">
                        <div className="table-row table-head">
                            <div className="table-col" data-type="id" onClick={this.sort.bind(this)}>id</div>
                            <div className="table-col" data-type="name" onClick={this.sort.bind(this)}>Name</div>
                            <div className="table-col" data-type="rating" onClick={this.sort.bind(this)}>Rating</div>
                            <div className="table-col" data-type="price" onClick={this.sort.bind(this)}>Price</div>
                        </div>
                        {
                            this.state.items.map((item,index) =>
                                <div key={index} className="table-row">
                                    <div className="table-col">{item.id}</div>
                                    <div className="table-col">{item.name}</div>
                                    <div className="table-col">
                                        <svg width='100' height="30">
                                            <defs>
                                                <linearGradient id={'lg'+index} x1="0" y1="100%" x2="100%" y2="100%">
                                                    <stop offset='0%' stopColor='#f5882a'/>
                                                    <stop offset={item.rating*20+'%'} stopColor='#f5882a'/>
                                                    <stop offset={item.rating*20 + 1+'%'} stopColor='#ccc'/>
                                                    <stop offset='100%' stopColor='#ccc'/>
                                                </linearGradient>
                                            </defs>
                                            <rect width='100' height='30' fill={'url(#lg'+index+')'} mask="url(#mask)"></rect>
                                        </svg>
                                    </div>
                                    <div className="table-col">{item.price}</div>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        );
    }
}


export default App;