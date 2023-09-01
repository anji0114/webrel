import { Button } from "@/components/elements/Button";

export default function Home() {
  return (
    <div>
      <p className="bg-black-500 w-10 h-10"></p>
      <Button href="/">aaa</Button>
      <div className="mt-2">
        <Button color="blue" size="sm" href="/">
          aaa
        </Button>
      </div>
      <div>
        <Button size="lg" color="red" href="/" disabled={true}>
          aaa
        </Button>
        <Button size="lg" color="sky" href="/" isLoading>
          aaa
        </Button>
        <Button size="lg" color="dark" href="/">
          aaa
        </Button>
      </div>
      <div className="rounded-[8px] bg-black-500 w-10 h-[140px]"></div>
    </div>
  );
}
