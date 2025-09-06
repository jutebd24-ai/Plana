import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl = "EX3gxOdGcpI" }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
        <VisuallyHidden>
          <DialogTitle>Plan A Agency Showreel</DialogTitle>
          <DialogDescription>
            Watch our agency showreel showcasing our digital marketing and creative work
          </DialogDescription>
        </VisuallyHidden>
        
        <div className="relative">
          <div className="absolute -top-16 right-0 flex items-center gap-3 z-50">
            <span className="text-white text-lg tracking-wider">Close Showreel</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:text-primary transition-colors"
              data-testid="close-video"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={isOpen ? `https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0&modestbranding=1` : ""}
              title="PLAN A AGENCY SHOWREEL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              data-testid="youtube-iframe"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
