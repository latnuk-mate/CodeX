export default function DashboardCert(){
    return(
        <div className="mt-8 p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="primary-bg p-8 rounded-lg h-fit">
                <div className="flex items-center gap-5 text-gray-100 mb-5">
                <i class="fa-solid fa-medal text-4xl"></i>
                    <h5 className="text-3xl">Discover the steps to earn your CodeX certificate.</h5>
                </div>
                <div className="border-b border-gray-300"></div>

                <div className="mt-8 mb-5 flex items-center">
                 <div
                    className="flex items-center justify-center rounded-full w-[40px] h-[40px] secondary-bg p-3">
                    <span className="text-2xl">1</span>
                </div>
                <div className="ps-6">
                <h5 className="text-xl">Enroll in a course.</h5>
                <p className="text-gray-400">Choose a course that fits your interests and offers a certificate.</p>
                </div>
                </div>

                <div className="mb-5 flex items-center">
                 <div
                    className="flex items-center justify-center rounded-full w-[40px] h-[40px] secondary-bg p-3">
                    <span className="text-2xl">2</span>
                </div>
                <div className="ps-6">
                <h5 className="text-xl">Complete the Course.</h5>
                <p className="text-gray-400">Watch all the lessons. You need to finish all parts of the course.</p>
                </div>
                </div>

                <div className="mb-5 flex items-center">
                 <div
                    className="flex items-center justify-center rounded-full w-[40px] h-[40px] secondary-bg p-3">
                    <span className="text-2xl">3</span>
                </div>
                <div className="ps-6">
                <h5 className="text-xl">Do the Assignments.</h5>
                <p className="text-gray-400">Finish all assignments. If there's feedback, make changes and submit them again.</p>
                </div>
                </div>

                <div className="mb-5 flex items-center">
                 <div
                    className="flex items-center justify-center rounded-full w-[40px] h-[40px] secondary-bg p-3">
                    <span className="text-2xl">4</span>
                </div>
                <div className="ps-6">
                <h5 className="text-xl">Chat on Chatra.</h5>
                <p className="text-gray-400">Done with everything? Send us a message on Chatra to ask for your certificate.</p>
                </div>
                </div>

                <div className="mb-2 flex items-center">
                 <div
                    className="flex items-center justify-center rounded-full w-[40px] h-[40px] brightColor-bg p-3">
                    <span className="text-2xl">5</span>
                </div>
                <div className="ps-6">
                <h5 className="text-xl">Grab Your Certificate!!</h5>
                <p className="text-gray-400">We'll check your course and assignments. Once all is good, you'll get your certificate in the Chatra chat.</p>
                </div>
                </div>
            </div>

            {/* second part... */}

            <div className="p-2">
                <div className="overflow-hidden w-full h-fit primary-bg p-3 rounded-s-md">
                    <img src="/certificate.png" alt="certificate" className="object-cover" />
                </div>
            <div className="mt-3 primary-bg p-5 rounded-lg">
                <h5 className="text-3xl mb-8">Frequently Asked Questions</h5>

                <div className="summary-question">
                    <details className="border-b border-gray-400 mb-4">
                    <summary className="mb-2">What happens if I don't complete all the assignments?</summary>
                    <p>If you don't finish all assignments, you won't qualify for a certificate. Make sure to complete and resubmit any that need revisions.</p>
                    </details>

                    <details className="border-b border-gray-400 mb-4">
                    <summary className="mb-2">How do I know my assignments have been verified?</summary>
                    <p>After you message us on Chatra asking for your certificate, we'll review your course and assignments. We'll then confirm on Chatra whether everything is verified.</p>
                    </details>
            
                    <details className="border-b border-gray-400 mb-4">
                    <summary className="mb-2">Can I still get a certificate if I skip some course content?</summary>
                    <p>No, you must complete all course content, including lessons and Assignments, to be eligible for a certificate.</p>
                    </details>

            
                    <details className="border-b border-gray-400 mb-2">
                    <summary className="mb-2">How long does it take to receive the certificate after verification?</summary>
                    <p>Once we confirm you've completed all steps, your certificate will be sent to you immediately via the Chatra chat.</p>
                    </details>
                </div>
            </div>
            </div>

        </div>
    )
}