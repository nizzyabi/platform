import { auth } from "@/auth";

const GuidesIdPage = ({
  params
}: {
  params: { guidesId: string }
}) => {
  return (
    <div>
      <h1>ID: {params.guidesId}</h1>
    </div>
  );
}
export default GuidesIdPage;