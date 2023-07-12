import { Fragment } from "react";
import MeetupList from '../components/meetups/MeetupList';
import Layout from  '../components/layout/Layout'

const DUMMY_MEETUP = [{
    id: 'm1',
    title: "first Meetup",
    address: 'Heart AFG',
    decrpation: 'this is frist meetup',
},
{
    id: 'm3',
    title: "second Meetup",
    address: 'Heart AFG',
    decrpation: 'this is second meetup',
}
]

const HomePage = () => {
    return (
        <Fragment>
            <Layout>
            <MeetupList meetups={DUMMY_MEETUP} />

            </Layout>

        </Fragment>
    )
}
export default HomePage;