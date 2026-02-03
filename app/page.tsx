import Image from "next/image";
import {Button} from "@/app/components/ui/Button";

export default function Home() {
  return (
    <div className="banner">
      <div className="flex min-h-screen w-full">
          <div className="container mx-autor flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-center w-full justify-center slider ">
                  <h1 className="font-heading text-h1 font-heading font-roboto_slab">Online Marketing & Web Design Agency Berlin</h1>
                  <p className="font-body text-sm">
                      We don&#39;t just build websites, we
                      make them <span className="text-red-600">successful</span>.
                  </p>
                  <p>Google rates</p>
                  <Button>Project Inquiry</Button>
                  <Button>WhatsApp</Button>
              </div>

              <div>
                  <Image src="/listandsell_isometric.webp" alt="isometric" unoptimized={true} width={500} height={500} priority={true} />
              </div>
          </div>

      </div>
    </div>
  );
}
