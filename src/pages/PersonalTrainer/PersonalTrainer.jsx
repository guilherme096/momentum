import Calendar from "react-calendar";
import PageLayout from "../../layouts/PageLayout";
import PtCalendar from "../../components/PtCalendar";
import LogCalendar from "../../components/LogCalendar";

export default function PersonalTrainer() {
  return (
    <PageLayout pageName="Personal Trainer">
      <div className="flex justify-between items-center ml-9 mr-9 mb-9">
        <div className="flex justify-between items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:s3%3A%2F%2Fmedia-private.canva.com%2FxAAlw%2FMAGAt9xAAlw%2F1%2Fp.jpg/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAABBPQlpZBYTc_C16sO1X1z2hfYvJ1PDEsz_NXT_DqacR&exp=1716695678&osig=AAAAAAAAAAAAAAAAAAAAADFVNQm6icy3Hu3yh2nOFUwx5rL1CK-FxrW-B63wRaiU&signer=media-rpc&x-canva-quality=screen&x-canva-subsampling=T" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold mt-2 ">Kevin Monteiro</h1>
          <h3 className="stat-title text-lg mb-1">Personal Trainer</h3>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Next Class</h1>

      <div className="flex items-center flex-col mt-4 justify-between">
        <div className="flex flex-row items-center">
          <div className="text-5xl font-bold">1</div>
          <div className="flex flex-col ml-2 items-center ">
            <div className="text-lg leading-tight">JUN</div>
            <div className="text-lg leading-tight">2024</div>
          </div>

          <div className="border border-gray-500 py-5 mr-5 ml-5"></div>

          <div className="text-4xl font-bold">18h00</div>
        </div>
        <span className="text-lg mt-3">
          Plan: <span className="font-semibold">Leg Day</span>
        </span>
      </div>
      <h1 className="mt-3 text-2xl font-bold">Calendar</h1>
      <div className="my-3">
        <LogCalendar />
      </div>
    </PageLayout>
  );
}
