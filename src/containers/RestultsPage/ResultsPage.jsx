import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResultCard } from '../../components/ResultCard/ResultCard';

export class ResultsPage extends Component {
  render() {
    const { locations } = this.props;
    // const { locations } = {
    //   locations: [
    //     {
    //       title: 'Healthy Living Project Incorporated',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/110871',
    //       id: '110871',
    //       address: '8650 W 95th St;Overland Park, KS 66212',
    //       telephone: '(913)-708-1414',
    //       point: {
    //         lat: '38.9569213',
    //         'long': '-94.6859152'
    //       }
    //     },
    //     {
    //       title: 'Kansas City CARE Clinic',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/112870',
    //       id: '112870',
    //       address: '2340 E Meyer Blvd;Kansas City, MO 64132',
    //       telephone: '(816)-753-5144',
    //       point: {
    //         lat: '39.0105412',
    //         'long': '-94.5579902'
    //       }
    //     },
    //     {
    //       title: 'Swope Health Belton',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/113755',
    //       id: '113755',
    //       address: '206 E North Ave;Belton, MO 64012',
    //       telephone: '(816)-599-5170',
    //       point: {
    //         lat: '38.8145633',
    //         'long': '-94.5316566'
    //       }
    //     },
    //     {
    //       title: 'Johnson County Health Department',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/32743',
    //       id: '32743',
    //       address: '6000 Lamar St;Mission, KS 66202',
    //       telephone: '(913)-826-1200',
    //       point: {
    //         lat: '39.0197109',
    //         'long': '-94.6602899'
    //       }
    //     },
    //     {
    //       title: 'Swope Health Central',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/7663',
    //       id: '7663',
    //       address: '3801 Blue Pkwy;Kansas City, MO 64130-2807',
    //       telephone: '(816)-923-5800',
    //       point: {
    //         lat: '39.0348634',
    //         'long': '-94.5396828'
    //       }
    //     },
    //     {
    //       title: 'Thrive Health Connection',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/36',
    //       id: '36',
    //       address: '5008 Prospect Ave;Kansas City, MO 64130',
    //       telephone: '(816)-561-8784',
    //       point: {
    //         lat: '39.0715903',
    //         'long': '-94.5843122'
    //       }
    //     },
    //     {
    //       title: 'Planned Parenthood Great Plains',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/2095',
    //       id: '2095',
    //       address: '1001 Emanuel Cleaver II Blvd;Kansas City, MO 64110',
    //       telephone: '(816)-756-2277',
    //       point: {
    //         lat: '39.0414949',
    //         'long': '-94.5738696'
    //       }
    //     },
    //     {
    //       title: 'Family Health Care',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/25028',
    //       id: '25028',
    //       address: '300-340 Southwest Blvd;Kansas City, KS 66103',
    //       telephone: '(913)-722-3100',
    //       point: {
    //         lat: '39.0686558',
    //         'long': '-94.6134908'
    //       }
    //     },
    //     {
    //       title: 'Childrens Mercy Hospitals and Clinics',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/114755',
    //       id: '114755',
    //       address: '3101 Broadway Blvd;Kansas City, MO 64111',
    //       telephone: '(816)-960-3050',
    //       point: {
    //         lat: '39.0706203',
    //         'long': '-94.5892403'
    //       }
    //     },
    //     {
    //       title: 'Kansas City CARE Clinic',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/16432',
    //       id: '16432',
    //       address: '3515 Broadway St;Kansas City, MO 64111-2537',
    //       telephone: '(816)-753-5144',
    //       point: {
    //         lat: '39.0633193',
    //         'long': '-94.5899304'
    //       }
    //     },
    //     {
    //       title: 'Plaza Physicians Group PC',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/116327',
    //       id: '116327',
    //       address: '906 W 48th St;Kansas City, MO 64111',
    //       telephone: '(816)-561-8125',
    //       point: {
    //         lat: '39.0681002',
    //         'long': '-94.5850730'
    //       }
    //     },
    //     {
    //       title: 'Kansas City Health Department',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/5443',
    //       id: '5443',
    //       address: '2400 Troost Ave;Kansas City, MO 64108',
    //       telephone: '(816)-513-6117',
    //       point: {
    //         lat: '39.0832995',
    //         'long': '-94.5713145'
    //       }
    //     },
    //     {
    //       title: 'Samuel U Rodgers Health Center',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/12541',
    //       id: '12541',
    //       address: '2121 Summit St;Kansas City, MO 64108',
    //       telephone: '(816)-429-2145',
    //       point: {
    //         lat: '39.0872568',
    //         'long': '-94.5934091'
    //       }
    //     },
    //     {
    //       title: 'Truman Medical Centers',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/12016',
    //       id: '12016',
    //       address: '2301 Holmes;Kansas City, MO 64108-2640',
    //       telephone: '',
    //       point: {
    //         lat: '39.0844523',
    //         'long': '-94.5752453'
    //       }
    //     },
    //     {
    //       title: 'Jackson County Health Department',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/2093',
    //       id: '2093',
    //       address: '313 S Liberty;Independence, MO 64050',
    //       telephone: '(816)-404-6415',
    //       point: {
    //         lat: '39.0893568',
    //         'long': '-94.4169537'
    //       }
    //     },
    //     {
    //       title: 'Planned Parenthood Great Plains',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/110887',
    //       id: '110887',
    //       address: '815 N Noland Rd;Independence, MO 64050',
    //       telephone: '(816)-252-3800',
    //       point: {
    //         lat: '39.0992256',
    //         'long': '-94.4125163'
    //       }
    //     },
    //     {
    //       title: 'Swope Health Independence',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/113756',
    //       id: '113756',
    //       address: '11320 E Truman Rd;Independence, MO 64050',
    //       telephone: '(816)-599-5201',
    //       point: {
    //         lat: '39.0953270',
    //         'long': '-94.4433660'
    //       }
    //     },
    //     {
    //       title: 'Samuel U Rodgers Health Center',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/18061',
    //       id: '18061',
    //       address: '825 Euclid Ave;Kansas City, MO 64124-2323',
    //       telephone: '(816)-307-0152',
    //       point: {
    //         lat: '39.1041040',
    //         'long': '-94.5572347'
    //       }
    //     },
    //     {
    //       title: 'Unified Government Public Health Department',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/5350',
    //       id: '5350',
    //       address: '619 Ann Ave;Kansas City, KS 66101',
    //       telephone: '(913)-573-8855',
    //       point: {
    //         lat: '39.1130370',
    //         'long': '-94.6249640'
    //       }
    //     },
    //     {
    //       title: 'Swope Health West',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/113760',
    //       id: '113760',
    //       address: '6013 Leavenworth Rd;Kansas City, MO 66104',
    //       telephone: '(816)-321-2200',
    //       point: {
    //         lat: '39.1427728',
    //         'long': '-94.7187477'
    //       }
    //     },
    //     {
    //       title: 'Swope Health Northland',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/113757',
    //       id: '113757',
    //       address: '4443 NW Gateway Ave;Riverside, MO 64150',
    //       telephone: '(816)-627-2050',
    //       point: {
    //         lat: '39.1764278',
    //         'long': '-94.6125422'
    //       }
    //     },
    //     {
    //       title: 'Planned Parenthood Great Plains',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/110880',
    //       id: '110880',
    //       address: '2900 NE 60th St;Gladstone, MO 64119',
    //       telephone: '(816)-453-6000',
    //       point: {
    //         lat: '39.2033893',
    //         'long': '-94.5451116'
    //       }
    //     },
    //     {
    //       title: 'Platte County Health Department',
    //       link: 'https://gettested.cdc.gov/gettested_redirect/37359',
    //       id: '37359',
    //       address: '1201 East St;Parkville, MO 64152',
    //       telephone: '(816)-587-5998',
    //       point: {
    //         lat: '39.1952922',
    //         'long': '-94.6817269'
    //       }
    //     }
    //   ]
    // }
    const results = locations.length
      ? locations.map(location => <ResultCard key={location.id} {...location} user={this.props.user}/>)
      : <div className="spinner-container">
          <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Loading Spinner" className="loading" />
        </div>
      
    return (
      <div className="ResultsPage">
        {results}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations,
  user: state.user
});

export default connect(mapStateToProps)(ResultsPage);