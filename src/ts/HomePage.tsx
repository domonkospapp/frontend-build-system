import { h } from 'preact';

type HomePageProps = {
    name?: string;
}
  
const HomePage = ({ name = "User" }: HomePageProps) => {
    console.log("Home page is working")
    return <div>Hello {name}!</div>
}

export default HomePage