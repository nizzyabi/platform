export const TutoringSession: React.FC = () => {
    return (
        <div>
        <div className="space-y-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-300 text-5xl font-bold">What does a tutoring session look like?</h1>
            <p className="text-lg text-zinc-400 pt-3 max-w-2xl mx-auto text-center">Each session is 1 hour long and we will go over your code, debug it, and teach you how to code. We will also go over any questions you may have and help you with your projects.</p>
            <div className="flex items-center justify-center pt-3">
              <iframe src="https://player.vimeo.com/video/918976093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className="aspect-video sm:w-[600px] md:w-[900px] rounded-xl"></iframe>
            </div>
          </div>
        </div>
    )
}