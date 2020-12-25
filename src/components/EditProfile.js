import React, { useState, useEffect, useContext } from 'react';
import { useForm }  from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { MusicianContext } from './MusicianContext';

const listOfInstruments = {
    "idiophones": [
        "Xylophone", "Marimba", "Vibraphone", "Glockenspiel", "Chimes"
    ],
    "membranophones": [
        "Drumkit", "Timpani", "Snare Drum", "Bass Drum", "Cymbal", "Woodblock", "Bodhran", "Bongos", 
    ],
    "chordophones": [
        "Violin", "Viola", "Cello", "Double Bass", "Acoustic Guitar", "Harp", "Acoustic Bass Guitar", "Banjo", "Bouzouki"
    ],
    "aerophones": [
        "Piccolo", "Flute", "Oboe", "Clarinet", "Bass Clarinet", "Bassoon", "Soprano Saxophone", "Alto Saxophone", "Tenor Saxophone", "Baritone Saxophone", "Horn", "Cornet", "Trumpet", "Trombone", "Tuba", "Ocarina", "Recorder", "Pennywhistle"
    ],
    "electrophones": [
        "Electric Guitar", "EWI", "Electric Bass Guitar", "Electric Violin", "Analog Synthesizer", 
    ]
}

const EditProfile = () => {
    const { register, handleSubmit, reset, setValue, getValues, errors, formState} = useForm();
    const musicianContext = useContext(MusicianContext);
    const [data, setData] = useState({});
    const [myInstruments, setMyInstruments] = useState([]);

    useEffect(() => {
        setData(JSON.parse(musicianContext.musicianData.currentMusician));
    }, [musicianContext.musicianData.currentMusician])

    const onSubmit = (updatedData) => {
        console.log(updatedData);
    }

    const selectInstruments = () => {
        return Object.keys(listOfInstruments).map(classification => {
            return(
                <div>
                <label>{classification}</label>
                    <select>
                    {listOfInstruments[classification].map((instrument, k) => {
                        return <option value={instrument}>{instrument}</option>
                    })}
                    </select>
                </div>
                
            )
        })
    }

    const populateInstruments = () => {
        
    }

    console.log(data);

    return(
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="string" name="name" ref={register}/>
                </div>
                <div>
                    <label>Alias</label>
                    <input type="string" name="alias" ref={register}/>
                </div>
                <div>
                    <label>Instruments</label>
                    <input type="string" name="instruments" ref={register}/>
                    {selectInstruments()}

                    
                </div>
                <div>
                    <label>Voice Range</label>
                    <input type="checkbox" name="soprano" ref={register}/>Soprano (C4-A6)
                    <input type="checkbox" name="mezzoSoprano" ref={register}/>Mezzo-soprano (A3-F#5)
                    <input type="checkbox" name="alto" ref={register}/>Alto (G3-E5)
                    <input type="checkbox" name="tenor" ref={register}/>Tenor (C3-A4)
                    <input type="checkbox" name="baritone" ref={register}/>Baritone (A2-F4)
                    <input type="checkbox" name="bass" ref={register}/>Bass (F2-E4)
                </div>
                <div>
                    <label>Audio Gear</label>
                    <input type="string" name="audioGear" ref={register}/>
                </div>
                <div>
                    <label>Production Skills</label>
                    <input type="checkbox" name="arranging" ref={register}/>Arranging
                    <input type="checkbox" name="engraving" ref={register}/>Engraving
                    <input type="checkbox" name="lyricalWriting" ref={register}/>Lyrical Writing
                    <input type="checkbox" name="mixing" ref={register}/>Mixing
                    <input type="checkbox" name="mastering" ref={register}/>Mastering
                    <input type="checkbox" name="transcribing" ref={register}/>Transcribing
                    <input type="checkbox" name="translating" ref={register}/>Translating
                    <input type="checkbox" name="soundDesign" ref={register}/>Sound Design
                    <input type="checkbox" name="videoEditing" ref={register}/>Video Editing
                </div>
                <div>
                    <label>Misc</label>
                    <input type="string" name="misc" ref={register}/>
                </div>

                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default EditProfile;