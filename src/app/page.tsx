import tw from "tailwind-styled-components";

const Container = tw.div`
  bg-primary
  text-black
  h-screen
`;

export default function Home() {
	return (
		<Container>
			<h1>home</h1>
		</Container>
	);
}
