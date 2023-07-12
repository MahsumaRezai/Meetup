import { Fragment } from "react";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetupPage = () => {
    function addMeetupHandler(inf) {
        console.log(MediaDeviceInfo)

    }
    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />

        </Fragment>
    )
}
export default NewMeetupPage;
