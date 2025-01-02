import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/auth/login-form";
import { ModeToggle } from "@/components/modetoggle";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/login.jpg"
          alt="A welcoming image representing the login process"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-around items-center">
          <div className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <p>P</p>
            </div>
            PhePha Inc.
          </div>
          <ModeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
