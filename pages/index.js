import { Fragment } from "react";
import MeetupList from '../components/meetups/MeetupList';

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
            <MeetupList meetups={DUMMY_MEETUP} />


        </Fragment>
    )
}
export default HomePage;