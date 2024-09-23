import {Card, Skeleton} from "@nextui-org/react";

export default function MySkeleton() {
  return (
    <Card className="w-[100%] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-12 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="rounded-lg">
          <div className="h-5 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-5 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">  
          <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">  
          <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">  
          <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">  
          <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}