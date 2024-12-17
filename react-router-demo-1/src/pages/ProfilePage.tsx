import { Link, useParams } from "react-router-dom"
import { profiles } from './ProfilesPage';

export default function ProfilePage() {

    const params = useParams<{ id: string }>();
    console.log(params);

    if (!params.id || !profiles.includes(parseInt(params.id))) {
        return <h3>Error: Profile ID {params.id} is not valid.</h3>;
    }

    return (
        <div className="text-3xl">
            <h1>Profile Page</h1>
            <h3>Profile ID: {params.id}</h3>
            <h1>
                <Link to={`/profiles`}>Back to Profiles</Link>
            </h1>
        </div>
    )
}