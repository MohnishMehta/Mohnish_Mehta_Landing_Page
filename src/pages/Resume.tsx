import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume: React.FC = () => {
  const pdfUrl = "Mohnish_Mehta_Resume.pdf"; // make sure your file is in /public

  return (
    <div
      id="Resume"
      className="flex flex-col items-center justify-center h-screen overflow-hidden"
    >
      {/* Header */}
      <div className="table w-full max-w-4xl mb-4 px-6">
        <span className="table-cell align-middle pr-3">
          <ClipboardListIcon className="h-5 w-5 text-yellow_vs" />
        </span>
        <code className="table-cell align-middle text-[#e6f1ff] text-3xl whitespace-nowrap">
          Resume
        </code>
        <div className="table-cell align-middle border-b border-b-[#e6f1ff] border-opacity-25 w-full" />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 border border-[#7aa2f7] rounded hover:bg-[#2b2a2a] text-[#e6f1ff] text-sm"
        >
          Open in new tab
        </a>
        <a
          href={pdfUrl}
          download
          className="px-3 py-2 border border-[#7aa2f7] rounded hover:bg-[#2b2a2a] text-[#e6f1ff] text-sm"
        >
          Download PDF
        </a>
      </div>

      {/* Embedded PDF (fills remaining height, page itself won't scroll) */}
      <div className="w-full max-w-4xl flex-1 flex justify-center px-6">
        <object
          data={pdfUrl}
          type="application/pdf"
          className="w-full h-full rounded-lg shadow-lg"
        >
          <p className="text-[#a2aabc]">
            Unable to display the PDF.{" "}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              Click here to open it
            </a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default Resume;
