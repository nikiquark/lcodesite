


function About(){
    return (
        <>
            <h1>LCODE Software</h1>
            <p>
                LCODE is a freely-distributed code for simulations of particle beam-driven plasma wake eld acceleration. 
                The code is 2-dimensional (2d3v), with both plane and axisymmetric geometries possible. 
                In the code, the simulation window moves with the light velocity, and the quasi-static approximation is used for calculating plasma response. 
                The beams are modeled by fully relativistic macro-particles. The plasma is modeled either by macro-particles (kinetic solver), or as the electron uid ( uid solver). 
                Transversely inhomogeneous plasmas, hot plasmas, non-neutral plasmas, and mobile ions are possible with the kinetic solver. 
                The code is furnished with extensive diagnosing tools which include the possibility of in-flight graphical presentation of the results.
            </p>
        </>
    );
}

export default About;