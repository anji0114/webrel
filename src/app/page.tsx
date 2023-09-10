"use client";
import { Button } from "@/components/elements/Button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="space-y-4 max-w-[800px] mx-auto py-10">
      <div className="space-x-4">
        <Button href="/" target="_blank" color="default" size="md">
          ボタン
        </Button>

        <Button
          disabled
          color="blue"
          size="md"
          onClick={() => {
            alert("ok");
          }}
          icon={<Image src="/images/icon/github.svg" alt="github" width={20} height={20} />}
        >
          ボタン
        </Button>

        <Button color="default" size="sm" isLoading icon={<TrashIcon />}>
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default Home;
