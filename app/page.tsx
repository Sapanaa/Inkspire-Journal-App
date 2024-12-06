import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart2, Calendar, ChevronRight, FileTextIcon } from "lucide-react";
import Link from "next/link";
import { Book, Sparkles, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import  TestimonialCarousel  from "@/components/testimonialCarousel";
import Faqs from "@/components/faq";
import  {getDailyPrompt}  from "../actions/public"
const features = [

  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default async function Home() {
  const advice = await getDailyPrompt();
  
  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="brand-font gradient-title text-4xl md:text-5xl lg:text-7xl">
          Where Your Mind Meets <br />
          the Magic of Words
        </h1>
        <p className="text-lg md:text-xl text-orange-800">
          Capture your thoughts, track your moods, and reflect on your journey with Inkspire.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10 "/>
          <div className="bg-white rounded-2xl p-4 mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="text-sm text-orange-900">Today&rsquo;s Entry</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-orange-500 rounded-full"/>
                <div className="h-2 w-2 bg-orange-700 rounded-full"/>

                <div className="h-2 w-2 bg-orange-800 rounded-full"/>

              </div>
            </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-orange-700">{advice?advice:"Mood"}</h3>
                <Skeleton className="h-4 bg-orange-100 w-3/4" />
                <Skeleton className="h-4 bg-orange-100 w-full" />

                <Skeleton className="h-4 bg-orange-100 w-2/3" />


              </div>
          </div>
        </div>


              <div className="flex gap-5 items-center justify-center">
                <Link href="/dashboard" >
                <Button variant={"journal"} className="rounded-full">Start Writing  
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                <Link href="#features" >
                <Button variant={"outline"} className="rounded-full border-orange-500 text-orange-600 hover:bg-orange-100">Learn More  
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
              </div>

              <section id="features" className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center ">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-orange-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-orange-700">{feature.description}</p>
                  </CardContent>
                  
                </Card>
                
                ))}

              </section>

              <div className="space-y-24 mt-24">
                <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center ">
                <FileTextIcon className="h-8 w-8 text-orange-600" />

                </div>
                  <h2 className="text-2xl font-semibold text-orange-800"> Rich Text Editor</h2>
                  <p className="text-sm text-orange-700">Express yourself with a powerful editor:</p>
                    <ul>
                      <li className="items-center flex flex-inline gap-2">
                        <div className="h-2 w-2 bg-black rounded-full"></div>
                        Supports markdown formatting</li>
                      <li className="items-center flex flex-inline gap-2">
                      <div className="h-2 w-2 bg-black rounded-full"></div>

                        Customizable styling</li>

                      <li className="items-center flex flex-inline gap-2">
                      <div className="h-2 w-2 bg-black rounded-full"></div>
                      Integrates with external tools</li> 
                    </ul>
                </div>
                <div>

                  <div className=" border-orange-400 rounded bg-white p-4 shadow-lg">
                  <div className="flex gap-2 mb-6">
        <div className="h-10 w-10 rounded bg-orange-100 flex "/>      
        <div className="h-10 w-10 rounded bg-orange-100  "/>      
        <div className="h-10 w-10 rounded bg-orange-100  "/>   
                  </div>
                  <div className="">
                  <Skeleton className="h-4 bg-orange-50 rounded w-3/4 mb-4" />
                  <Skeleton className="h-4 bg-orange-50 rounded w-full mb-4" />
                  <Skeleton className="h-4 bg-orange-50 rounded w-2/3 mb-4 " />
                  <Skeleton className="h-4 bg-orange-50 rounded w-2/3 mb-4" />


                  </div>

                </div>

                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
              <div className=" border-orange-400 rounded bg-white p-4 shadow-lg">
                <div className="h-40 w-full bg-orange-50 mb-4"></div>
                  <div className="flex gap-2 mb-6">
        <div className="h-10 w-10 rounded bg-orange-100 "/>      
        <div className="h-10 w-10 rounded bg-orange-100  "/>      
        <div className="h-10 w-10 rounded bg-orange-100  "/>   
                  </div>
               
                </div>
              <div className="space-y-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center ">
                <BarChart2 className="h-8 w-8 text-orange-600" />

                </div>
                  <h2 className="text-2xl font-semibold text-orange-800"> Rich Text Editor</h2>
                  <p className="text-sm text-orange-700">Express yourself with a powerful editor:</p>
                    <ul>
                      <li className="items-center flex flex-inline gap-2">
                        <div className="h-2 w-2 bg-black rounded-full"></div>
                        Visual mood trends</li>
                      <li className="items-center flex flex-inline gap-2">
                      <div className="h-2 w-2 bg-black rounded-full"></div>

                        Pattern recognigation</li>

                     
                    </ul>
                </div>
              </div>
              </div>
              
      </div>
      <TestimonialCarousel/>
      <Faqs/>

      <div>
        <Card className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 p-10">
          <CardContent className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold text-orange-800">Start Reflct-ing on Your Journey Today</h2>
            <p className="text-sm text-orange-700  ">Join thousands of writers who have already discovered the power of digital journaling</p>
            <Link href="/journal" >
            <Button variant={"journal"} >Get Started For Free</Button>
            </Link>
          </CardContent>
        </Card>
      </div>


    </div>
  );
}
