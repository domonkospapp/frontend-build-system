import { h } from 'preact';

type HomePageProps = {
    name: string;
}

const HomePage = ({ name = "User" }: HomePageProps) => (
  <div>
    Hello
    {name}
    !
  </div>
)

export default HomePage
