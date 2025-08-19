
import { jsPDF } from "jspdf";
import Image from "next/image";
import dashboardImage from "../public/dashboard.png"; 

export default function DownloadPdfButton() {
  const generatePDF = () => {
    const pdf = new jsPDF("l", "mm", "a4"); 
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

   
    pdf.addImage(dashboardImage.src, "PNG", 0, 0, pageWidth, pageHeight);

    pdf.save("dashboard.pdf");
  };

  return (
    <div className="p-4">
      <button
        onClick={generatePDF}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download Dashboard PDF
      </button>

      {/* Optional: show preview */}
      <div className="mt-4 border rounded">
        <Image src={dashboardImage} alt="Dashboard Screenshot" />
      </div>
    </div>
  );
}
