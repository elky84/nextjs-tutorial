import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      Go to {props.profile}'s profile
    </Link>
  </div>
);

const Index = props => (
  <Layout>
    <h1>Friends List {props.profiles[0]}</h1>
    {props.profiles.map((profile, index) => (
      <ProfileLink key={index} profile={profile} />
    ))}
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://random-data-api.com/api/v2/users?size=10");
  const data = await res.json();

  return {
    profiles: data.map(profile => profile.last_name.toLowerCase())
  };
};

export default Index;