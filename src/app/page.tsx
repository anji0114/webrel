import { Button } from "@/components/elements/Button";
import { ArrowDownCircleIcon, BoltIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-4 max-w-[800px] mx-auto py-10">
      <div className="space-x-4">
        <Button color="default" size="md">
          ボタン
        </Button>
        <Button
          color="blue"
          size="md"
          icon={<Image src="/images/icon/github.svg" alt="github" width={20} height={20} />}
        >
          ボタン
        </Button>
        <Button color="default" size="sm" isLoading icon={<TrashIcon />}>
          ログイン
        </Button>
        <Button color="red" size="lg" href="/">
          ボタン
        </Button>
      </div>
    </div>
  );
}
