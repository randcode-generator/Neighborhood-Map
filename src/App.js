import React, { Component } from 'react';
import Map from './Map.js'
import Nav from './Nav.js'

class App extends Component {
  test() {
    let options = {
      headers: {
        'Authorization': 'Bearer SbvuLHYUyJjF_EzvgG3rNbXcsr1mSTXVfRKEbLjWF65re6PzXJgsuKYtdUA1zi4RX7CYZjhSK3FTqjTKoc1U-52wD3Ipl53kGxxfWBLiGhWrmI3PkOpfhMt6eOrxWnYx' 
      }
    }

    var processJson = (result) => {
      console.log(result)
      console.log(result.businesses[0].name)
    }

    var error = (error) => {
      console.log(error)
    }

    //change this later
    fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=40.594069&longitude=-73.976514&limit=5", options)
      .then(res => res.json())
      .then(processJson, error)
  }

  test2() {
    return {
        "businesses": [
            {
                "id": "Etg2R7kFSSExsvki0sOqug",
                "alias": "the-original-johns-deli-brooklyn",
                "name": "The Original John's Deli",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NOCoh7SAEnRU1phj8A3i0g/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/the-original-johns-deli-brooklyn?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 275,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    },
                    {
                        "alias": "sandwiches",
                        "title": "Sandwiches"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 40.5971199,
                    "longitude": -73.984982
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "2033 Stillwell Ave",
                    "address2": "",
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11223",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "2033 Stillwell Ave",
                        "Brooklyn, NY 11223"
                    ]
                },
                "phone": "+17183727481",
                "display_phone": "(718) 372-7481",
                "distance": 791.3760864528361
            },
            {
                "id": "aiXLqx3hhMSERMsF8mBBFQ",
                "alias": "johns-deli-ii-brooklyn",
                "name": "John's Deli II",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/RYfCFBOLKlsKNon11qIMYQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/johns-deli-ii-brooklyn?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 31,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 40.5878791809082,
                    "longitude": -73.9839477539062
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "2438 Stillwell Ave",
                    "address2": "",
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11223",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "2438 Stillwell Ave",
                        "Brooklyn, NY 11223"
                    ]
                },
                "phone": "+17187144377",
                "display_phone": "(718) 714-4377",
                "distance": 919.8019550153588
            },
            {
                "id": "ApVoDeSuEXp8Paqc5Mrfzw",
                "alias": "jay-and-lloyds-kosher-deli-brooklyn",
                "name": "Jay & Lloyd's Kosher Deli",
                "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vAZmUzpjJ6yvWiRoT3IeMw/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/jay-and-lloyds-kosher-deli-brooklyn?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 185,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    },
                    {
                        "alias": "newamerican",
                        "title": "American (New)"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 40.60006,
                    "longitude": -73.94417
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "2718 Ave U",
                    "address2": "",
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11229",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "2718 Ave U",
                        "Brooklyn, NY 11229"
                    ]
                },
                "phone": "+17188915298",
                "display_phone": "(718) 891-5298",
                "distance": 2814.0629195199417
            },
            {
                "id": "KYP-56XVnZ_x4fb270ZUVg",
                "alias": "jimmys-famous-heros-brooklyn-2",
                "name": "Jimmy's Famous Heros",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/t_rRrao-7urcHM5S2iYulA/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/jimmys-famous-heros-brooklyn-2?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 87,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    },
                    {
                        "alias": "sandwiches",
                        "title": "Sandwiches"
                    }
                ],
                "rating": 4.5,
                "coordinates": {
                    "latitude": 40.58408,
                    "longitude": -73.95088
                },
                "transactions": [],
                "price": "$$",
                "location": {
                    "address1": "1786 Sheepshead Bay Rd",
                    "address2": "",
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11235",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "1786 Sheepshead Bay Rd",
                        "Brooklyn, NY 11235"
                    ]
                },
                "phone": "+17186488001",
                "display_phone": "(718) 648-8001",
                "distance": 2428.084385916667
            },
            {
                "id": "TCPkVG3SPMVz8FcXg26ZDA",
                "alias": "cropsey-bagels-and-deli-brooklyn",
                "name": "Cropsey Bagels & Deli",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/O1Eh4GpG5ydRdEtcveOJyg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/cropsey-bagels-and-deli-brooklyn?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 17,
                "categories": [
                    {
                        "alias": "bagels",
                        "title": "Bagels"
                    },
                    {
                        "alias": "desserts",
                        "title": "Desserts"
                    },
                    {
                        "alias": "delis",
                        "title": "Delis"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 40.586215,
                    "longitude": -73.987709
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "2819 Cropsey Ave",
                    "address2": null,
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11214",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "2819 Cropsey Ave",
                        "Brooklyn, NY 11214"
                    ]
                },
                "phone": "+17189969700",
                "display_phone": "(718) 996-9700",
                "distance": 1288.532848500392
            },
            {
                "id": "1fYBZCQh_fI8XUOpZ15Vag",
                "alias": "georgian-deli-and-bakery-brooklyn",
                "name": "Georgian Deli and Bakery",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/3DI0VB-0m9QWa_VLDvIHVQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/georgian-deli-and-bakery-brooklyn?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 34,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    },
                    {
                        "alias": "bakeries",
                        "title": "Bakeries"
                    }
                ],
                "rating": 5,
                "coordinates": {
                    "latitude": 40.600711,
                    "longitude": -73.99221
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "2270 86th St",
                    "address2": null,
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11214",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "2270 86th St",
                        "Brooklyn, NY 11214"
                    ]
                },
                "phone": "+17182809119",
                "display_phone": "(718) 280-9119",
                "distance": 1517.5579354991382
            },
            {
                "id": "wYzp2FYgJ6R5NHjLqE4fZw",
                "alias": "meat-supreme-brooklyn-2",
                "name": "Meat Supreme",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_00BnlUvWmfQvmBMiMYmOA/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/meat-supreme-brooklyn-2?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 28,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    },
                    {
                        "alias": "sandwiches",
                        "title": "Sandwiches"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 40.59675,
                    "longitude": -73.97732
                },
                "transactions": [],
                "price": "$$",
                "location": {
                    "address1": "181 Avenue U",
                    "address2": "",
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11223",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "181 Avenue U",
                        "Brooklyn, NY 11223"
                    ]
                },
                "phone": "+17183724555",
                "display_phone": "(718) 372-4555",
                "distance": 306.1309311722836
            },
            {
                "id": "y3GXZV1sIR44rcS2mNcX2Q",
                "alias": "603-avenue-z-deli-brooklyn",
                "name": "603 Avenue Z Deli",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Qxs9GKC7iA2yvnj0TB-K3g/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/603-avenue-z-deli-brooklyn?adjust_creative=BlA7bTdhgsH8BT0BA_eO4A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BlA7bTdhgsH8BT0BA_eO4A",
                "review_count": 4,
                "categories": [
                    {
                        "alias": "delis",
                        "title": "Delis"
                    }
                ],
                "rating": 3,
                "coordinates": {
                    "latitude": 40.58626,
                    "longitude": -73.97161
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "603 Ave Z",
                    "address2": "",
                    "address3": "",
                    "city": "Brooklyn",
                    "zip_code": "11223",
                    "country": "US",
                    "state": "NY",
                    "display_address": [
                        "603 Ave Z",
                        "Brooklyn, NY 11223"
                    ]
                },
                "phone": "+17186487775",
                "display_phone": "(718) 648-7775",
                "distance": 961.5289025911916
            }
        ],
        "total": 1200,
        "region": {
            "center": {
                "longitude": -73.976514,
                "latitude": 40.594069
            }
        }
    }
  }
  componentDidMount() {
    let j = this.test2()
    this.setState({
      allBusinesses: j.businesses,
      businesses: j.businesses
    })
  }

  filterChange(e) {
    const { allBusinesses, businesses } = this.state
    var updated = allBusinesses
    if(e.length > 0) {
      updated = allBusinesses.filter(function(item) {
        return item.name.toLowerCase().search(
          e.toLowerCase()) !== -1;
      })
    }

    this.setState({
      businesses: updated
    })
  }

  render() {
    if(this.state == null) {
      return (<p>error</p>)
    } else {
      const { businesses } = this.state
      return (
        <div id="divUp">
          <Nav items={ businesses } 
            filterChange={ this.filterChange.bind(this) }></Nav>
          <Map items={ businesses }></Map>
        </div>);
    }
  }
}

export default App;
