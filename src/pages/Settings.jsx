import PageLayout from "../layouts/PageLayout";
import {Link} from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Settings(){
    return (
        <PageLayout pageName='Settings'>
            <div className='p-5'>
                <h1 className='text-2xl font-bold'>We're working on it :)</h1>
                <BackButton className='btn btn-primary mt-5' >Go back</BackButton>
            </div>
        </PageLayout>
    );
}