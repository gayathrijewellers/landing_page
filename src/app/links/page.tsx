import {
  ArrowRight,
  ChevronsDown,
  Facebook,
  Instagram,
  MessageCircle,
  SquarePen,
} from "lucide-react";
import Image from "next/image";

const links = [
  {
    icon: <Facebook className="h-4 w-4 text-blue-400" />,
    title: "facebook",
    url: "https://www.facebook.com/gayathrijewellers.thirthahalli",
  },
  {
    icon: <Instagram className="h-4 w-4 text-fuchsia-500" />,
    title: "instagram",
    url: "https://www.instagram.com/gayathri_jewellers._?igsh=aGxqdG9kcnMyM3J5&utm_source=qr",
  },
  {
    icon: <MessageCircle className="h-4 w-4 text-green-400" />,
    title: "whatsapp",
    url: "https://wa.me/9480725917",
  },
  {
    icon: <SquarePen className="h-4 w-4 text-red-500" />,
    title: "write a review",
    url: "https://www.google.com/search?gs_ssp=eJwFwUEOQDAQAMC4ij9wcdZV1cYT_GJXly09VRPl9WbqZjgGELm-NGWtqqVXRRORBWeJ3QzGwqIKwT7uno02Hp3229oe-GKWFLqTH46R091lCSkLCsYYfmmRHBc&q=gayathri+jewellers+thirthahalli&rlz=1C1VDKB_enIN1076IN1076&oq=gayathri+jw&gs_lcrp=EgZjaHJvbWUqDwgCEC4YDRivARjHARiABDIGCAAQRRg5MgkIARAAGA0YgAQyDwgCEC4YDRivARjHARiABDIPCAMQLhgNGK8BGMcBGIAEMg8IBBAuGA0YrwEYxwEYgAQyCQgFEAAYDRiABDIJCAYQABgNGIAEMgoIBxAAGA0YDxgeMgoICBAAGAoYFhgeMgoICRAAGAoYFhge0gEINDc4M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3bbb7187be861571:0xb1f2fde535da83dc,3,,,,",
  },
];

export default function LinksPage() {
  function handleCopyEventLink(event: MouseEvent) {
    event.preventDefault();
    navigator.clipboard.writeText(`${location.origin}/links`);
    // toast.success("Invite link has been copied!");
  }

  return (
    <div className="block lg:flex gap-6 h-full lg:p-4">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center lg:border border-neutral-800">
        <div className="flex flex-col gap-2">
          <div className="mb-4 flex flex-col justify-center items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              height="2000"
              width="2000"
              className="mb-4 h-full w-36 invert object-fit"
            />
            <p className=" uppercase font-bold text-xl text-neutral-300 tracking-tighter">
              gayathri jewellers
            </p>
            <p className=" text-neutral-400 text-xs capitalize">thirthahalli</p>
          </div>
          {links.map((link, index) => (
            <a href={link.url} className="w-full" target="_blank" key={index}>
              <div className="border border-neutral-700 w-[250px] md:w-[300px] p-2 px-4 hover:bg-neutral-800 duration-500 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  {link.icon}

                  <p className="text-slate-300 font-bold text-xs capitalize">
                    {link.title}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
          {/* <div className="border border-neutral-700 w-[250px] md:w-[300px] p-2 px-4 hover:bg-neutral-800 duration-500 flex justify-between items-center cursor-pointer">
            <div className="flex gap-3 items-center">
              <Share2 className="h-4 w-4" />

              <p className="text-slate-300 font-bold text-xs capitalize">
                share
              </p>
            </div>
            <ArrowRight className="h-4 w-4" />
          </div> */}
          <div className="flex justify-center mt-12 lg:hidden">
            <a href="#map">
              <ChevronsDown className="h-4 w-4 animate-pulse" />
            </a>
          </div>
        </div>
      </div>

      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3876.46529742526!2d75.24129792508916!3d13.690245436695234!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3bbb7187be861571%3A0xb1f2fde535da83dc!2sCar%20St%2C%20Thirthahalli%2C%20Karnataka%20577432!3m2!1d13.6903632!2d75.2437877!5e0!3m2!1sen!2sin!4v1719047168072!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale-[60%] invert-[90%] contrast w-full p-1 lg:p-0 lg:w-1/2 h-1/3 lg:h-full"
      ></iframe>
    </div>
  );
}
