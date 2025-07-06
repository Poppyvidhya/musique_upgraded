var g=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var v=g((w,l)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();const m={featuredPlaylists:[{id:"ar-rahman-hits",name:"A.R. Rahman Hits",description:"Best of the Mozart of Madras",image:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",songs:["song1","song2","song4","song7","song10"]},{id:"ilayaraja-classics",name:"Ilayaraja Classics",description:"Timeless melodies from the Maestro",image:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",songs:["song3","song6","song9","song12","song15"]},{id:"anirudh-beats",name:"Anirudh Beats",description:"Modern Tamil music sensation",image:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",songs:["song5","song8","song11","song14","song17"]},{id:"yuvan-shankar",name:"Yuvan Shankar Raja",description:"Youth icon of Tamil music",image:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",songs:["song13","song16","song18","song19","song20"]}],songs:{song1:{id:"song1",title:"Vande Mataram",artist:"A.R. Rahman",album:"Vande Mataram",duration:"7:05",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Patriotic"},song2:{id:"song2",title:"Jai Ho",artist:"A.R. Rahman",album:"Slumdog Millionaire",duration:"5:09",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Film Music"},song3:{id:"song3",title:"Chinna Chinna Aasai",artist:"Ilayaraja, S.P. Balasubrahmanyam, S. Janaki",album:"Roja",duration:"4:32",artwork:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Melody"},song4:{id:"song4",title:"Roja Janeman",artist:"A.R. Rahman, Hariharan, K.S. Chithra",album:"Roja",duration:"5:15",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Romance"},song5:{id:"song5",title:"Why This Kolaveri Di",artist:"Anirudh Ravichander, Dhanush",album:"3",duration:"4:02",artwork:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Folk Pop"},song6:{id:"song6",title:"Ilamai Idho Idho",artist:"Ilayaraja, S.P. Balasubrahmanyam",album:"Sakalakalavallavan",duration:"4:45",artwork:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Classical"},song7:{id:"song7",title:"Mustafa Mustafa",artist:"A.R. Rahman, Udit Narayan, Jaspinder Narula",album:"Kadhal Desam",duration:"6:12",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Qawwali"},song8:{id:"song8",title:"Thalli Pogathey",artist:"Anirudh Ravichander, Sid Sriram",album:"Achcham Yenbadhu Madamaiyada",duration:"4:28",artwork:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Melody"},song9:{id:"song9",title:"Nilave Vaa",artist:"Ilayaraja, S.P. Balasubrahmanyam, S. Janaki",album:"Mouna Ragam",duration:"4:55",artwork:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Romance"},song10:{id:"song10",title:"Dil Se Re",artist:"A.R. Rahman, Udit Narayan, Anupama Deshpande",album:"Dil Se",duration:"5:33",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Sufi"},song11:{id:"song11",title:"Surviva",artist:"Anirudh Ravichander, Yogi B, Mali",album:"Vivegam",duration:"3:45",artwork:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Hip Hop"},song12:{id:"song12",title:"Mannil Indha Kadhalandri",artist:"Ilayaraja, S.P. Balasubrahmanyam",album:"Keladi Kanmani",duration:"4:18",artwork:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Classical"},song13:{id:"song13",title:"Evan Di Unna Pethan",artist:"Yuvan Shankar Raja, Benny Dayal",album:"Vaaranam Aayiram",duration:"4:12",artwork:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Pop"},song14:{id:"song14",title:"Kaththi Theme",artist:"Anirudh Ravichander",album:"Kaththi",duration:"2:58",artwork:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Theme"},song15:{id:"song15",title:"Sundari Kannal Oru Sethi",artist:"Ilayaraja, S.P. Balasubrahmanyam, S. Janaki",album:"Thalapathi",duration:"5:02",artwork:"https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Duet"},song16:{id:"song16",title:"Yaaradi Nee Mohini",artist:"Yuvan Shankar Raja, Dhanush",album:"Yaaradi Nee Mohini",duration:"4:35",artwork:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Romance"},song17:{id:"song17",title:"Maari Thara Local",artist:"Anirudh Ravichander, Dhanush",album:"Maari",duration:"3:52",artwork:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Kuthu"},song18:{id:"song18",title:"Loosu Penne",artist:"Yuvan Shankar Raja, Vijay Yesudas",album:"Vallavan",duration:"4:22",artwork:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Melody"},song19:{id:"song19",title:"Kadhal Anukkal",artist:"Yuvan Shankar Raja, Harish Raghavendra",album:"Enthiran",duration:"4:48",artwork:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Romance"},song20:{id:"song20",title:"Paiya",artist:"Yuvan Shankar Raja, Blaaze",album:"Paiya",duration:"4:15",artwork:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Hip Hop"},song21:{id:"song21",title:"Ponni Nadhi",artist:"A.R. Rahman, A.R. Rehana, Bamba Bakya",album:"Ponniyin Selvan",duration:"4:23",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"Epic"},song22:{id:"song22",title:"Alaikadal",artist:"A.R. Rahman, Antara Nandy",album:"Ponniyin Selvan",duration:"4:12",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Classical"},song23:{id:"song23",title:"Ratchasa Maamaney",artist:"Shreya Goshal, Palakad Sreeram",album:"Ponniyin Selvan",duration:"3:56",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue.ogg",genre:"Folk"},song24:{id:"song24",title:"Chola Chola",artist:"Sathyaprakash, VM Mahalingam",album:"Ponniyin Selvan",duration:"4:44",artwork:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",genre:"War Song"},song25:{id:"song25",title:"Vaathi Coming",artist:"Anirudh Ravichander, Gana Balachandar",album:"Master",duration:"3:28",artwork:"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",url:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.ogg",genre:"Mass"}},popularSongs:["song1","song2","song3","song4","song5","song6","song7","song8","song9","song10","song11","song12","song13","song14","song15","song16","song17","song18","song19","song20","song21","song22","song23","song24","song25"],getUserData(){const o=localStorage.getItem("musicAppUserData");return o?JSON.parse(o):{favorites:[],playlists:[],recentlyPlayed:[],settings:{volume:70,shuffle:!1,repeat:"off",theme:"dark"}}},saveUserData(o){localStorage.setItem("musicAppUserData",JSON.stringify(o))},searchSongs(o){if(!o||o.length<2)return[];const t=o.toLowerCase(),e=[];return Object.values(this.songs).forEach(s=>{(s.title.toLowerCase().includes(t)||s.artist.toLowerCase().includes(t)||s.album.toLowerCase().includes(t)||s.genre.toLowerCase().includes(t))&&e.push(s)}),e},getPlaylistSongs(o){const t=this.featuredPlaylists.find(e=>e.id===o);return t?t.songs.map(e=>this.songs[e]).filter(Boolean):[]},getRandomSongs(o=10){return Object.values(this.songs).sort(()=>.5-Math.random()).slice(0,o)},getSongsByGenre(o){return Object.values(this.songs).filter(t=>t.genre.toLowerCase()===o.toLowerCase())},getSongsByComposer(o){return Object.values(this.songs).filter(t=>t.artist.toLowerCase().includes(o.toLowerCase()))}};typeof l<"u"&&l.exports&&(l.exports=m);class h{constructor(){this.activeModal=null,this.createModalContainer(),this.bindEvents()}createModalContainer(){this.overlay=document.createElement("div"),this.overlay.className="modal-overlay",this.overlay.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            z-index: 10000;
            display: none;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        `,document.body.appendChild(this.overlay)}bindEvents(){this.overlay.addEventListener("click",t=>{t.target===this.overlay&&this.closeModal()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.activeModal&&this.closeModal()})}showModal(t,e={}){const s=document.createElement("div");return s.className="modal",s.style.cssText=`
            background: var(--surface-color);
            border-radius: 12px;
            padding: 0;
            max-width: ${e.maxWidth||"500px"};
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: modalSlideIn 0.3s ease-out;
            border: 1px solid var(--border-color);
        `,s.innerHTML=t,this.overlay.appendChild(s),this.overlay.style.display="flex",this.activeModal=s,document.body.style.overflow="hidden",s}closeModal(){this.activeModal&&(this.activeModal.style.animation="modalSlideOut 0.3s ease-out",setTimeout(()=>{this.overlay.style.display="none",this.overlay.innerHTML="",this.activeModal=null,document.body.style.overflow=""},300))}showCreatePlaylistModal(){const e=this.showModal(`
            <div class="modal-header">
                <h2>Create New Playlist</h2>
                <button class="modal-close" onclick="modalManager.closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="createPlaylistForm">
                    <div class="form-group">
                        <label for="playlistName">Playlist Name</label>
                        <input type="text" id="playlistName" placeholder="Enter playlist name" required>
                    </div>
                    <div class="form-group">
                        <label for="playlistDescription">Description (Optional)</label>
                        <textarea id="playlistDescription" placeholder="Describe your playlist" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Choose Cover Image</label>
                        <div class="image-options">
                            <div class="image-option active" data-image="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 1">
                            </div>
                            <div class="image-option" data-image="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 2">
                            </div>
                            <div class="image-option" data-image="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 3">
                            </div>
                            <div class="image-option" data-image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 4">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-secondary" onclick="modalManager.closeModal()">Cancel</button>
                <button type="submit" class="btn-primary" onclick="modalManager.handleCreatePlaylist()">Create Playlist</button>
            </div>
        `);e.querySelectorAll(".image-option").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".image-option").forEach(a=>a.classList.remove("active")),s.classList.add("active")})}),setTimeout(()=>{const s=e.querySelector("#playlistName");s&&s.focus()},100)}handleCreatePlaylist(){const t=document.getElementById("createPlaylistForm"),e=t.querySelector("#playlistName").value.trim(),s=t.querySelector("#playlistDescription").value.trim(),a=t.querySelector(".image-option.active").dataset.image;if(!e){this.showToast("Please enter a playlist name","error");return}const i=musicData.getUserData(),n={id:"playlist_"+Date.now(),name:e,description:s,songs:[],image:a,createdAt:new Date().toISOString()};i.playlists.push(n),musicData.saveUserData(i),this.closeModal(),this.showToast("Playlist created successfully!","success"),window.uiManager&&uiManager.loadUserPlaylists()}showAddToPlaylistModal(t){const e=musicData.getUserData(),s=musicData.songs[t];if(!s)return;if(e.playlists.length===0){this.showConfirmModal("No Playlists Found","You need to create a playlist first. Would you like to create one now?",()=>this.showCreatePlaylistModal());return}const a=`
            <div class="modal-header">
                <h2>Add to Playlist</h2>
                <button class="modal-close" onclick="modalManager.closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="song-preview">
                    <img src="${s.artwork}" alt="${s.title}">
                    <div class="song-info">
                        <h4>${s.title}</h4>
                        <p>${s.artist}</p>
                    </div>
                </div>
                <div class="playlist-list">
                    ${e.playlists.map(i=>`
                        <div class="playlist-item ${i.songs.includes(t)?"added":""}" 
                             data-playlist-id="${i.id}" 
                             onclick="modalManager.toggleSongInPlaylist('${t}', '${i.id}')">
                            <img src="${i.image}" alt="${i.name}">
                            <div class="playlist-info">
                                <h4>${i.name}</h4>
                                <p>${i.songs.length} songs</p>
                            </div>
                            <div class="playlist-status">
                                <i class="fas ${i.songs.includes(t)?"fa-check":"fa-plus"}"></i>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-primary" onclick="modalManager.closeModal()">Done</button>
            </div>
        `;this.showModal(a,{maxWidth:"400px"})}toggleSongInPlaylist(t,e){const s=musicData.getUserData(),a=s.playlists.find(d=>d.id===e);if(!a)return;const i=a.songs.indexOf(t),n=document.querySelector(`[data-playlist-id="${e}"]`),r=n.querySelector(".playlist-status i");i>-1?(a.songs.splice(i,1),n.classList.remove("added"),r.className="fas fa-plus",this.showToast("Song removed from playlist","info")):(a.songs.push(t),n.classList.add("added"),r.className="fas fa-check",this.showToast("Song added to playlist","success"));const c=n.querySelector(".playlist-info p");c.textContent=`${a.songs.length} songs`,musicData.saveUserData(s)}showConfirmModal(t,e,s,a=null){const i=`
            <div class="modal-header">
                <h2>${t}</h2>
            </div>
            <div class="modal-body">
                <p>${e}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-secondary" onclick="modalManager.closeModal()">Cancel</button>
                <button type="button" class="btn-primary" onclick="modalManager.handleConfirm()">Confirm</button>
            </div>
        `;this.showModal(i,{maxWidth:"400px"}),this.confirmCallback=s,this.cancelCallback=a}handleConfirm(){this.confirmCallback&&this.confirmCallback(),this.closeModal()}showEditPlaylistModal(t){const s=musicData.getUserData().playlists.find(n=>n.id===t);if(!s)return;const a=`
            <div class="modal-header">
                <h2>Edit Playlist</h2>
                <button class="modal-close" onclick="modalManager.closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="editPlaylistForm">
                    <div class="form-group">
                        <label for="editPlaylistName">Playlist Name</label>
                        <input type="text" id="editPlaylistName" value="${s.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="editPlaylistDescription">Description</label>
                        <textarea id="editPlaylistDescription" rows="3">${s.description||""}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Cover Image</label>
                        <div class="image-options">
                            <div class="image-option ${s.image==="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300"?"active":""}" data-image="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 1">
                            </div>
                            <div class="image-option ${s.image==="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300"?"active":""}" data-image="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 2">
                            </div>
                            <div class="image-option ${s.image==="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300"?"active":""}" data-image="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 3">
                            </div>
                            <div class="image-option ${s.image==="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300"?"active":""}" data-image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300">
                                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Option 4">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-secondary" onclick="modalManager.closeModal()">Cancel</button>
                <button type="button" class="btn-primary" onclick="modalManager.handleEditPlaylist('${t}')">Save Changes</button>
            </div>
        `,i=this.showModal(a);i.querySelectorAll(".image-option").forEach(n=>{n.addEventListener("click",()=>{i.querySelectorAll(".image-option").forEach(r=>r.classList.remove("active")),n.classList.add("active")})})}handleEditPlaylist(t){const e=document.getElementById("editPlaylistForm"),s=e.querySelector("#editPlaylistName").value.trim(),a=e.querySelector("#editPlaylistDescription").value.trim(),i=e.querySelector(".image-option.active").dataset.image;if(!s){this.showToast("Please enter a playlist name","error");return}const n=musicData.getUserData(),r=n.playlists.find(c=>c.id===t);r&&(r.name=s,r.description=a,r.image=i,musicData.saveUserData(n),this.closeModal(),this.showToast("Playlist updated successfully!","success"),window.uiManager&&uiManager.loadUserPlaylists())}showToast(t,e="info"){const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t;const a={success:"#1db954",warning:"#ffa500",error:"#e22134",info:"#1db954"};s.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${a[e]};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10001;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            font-weight: 500;
        `,document.body.appendChild(s),setTimeout(()=>{s.style.animation="slideOutRight 0.3s ease-out",setTimeout(()=>s.remove(),300)},3e3)}}new h;typeof l<"u"&&l.exports&&(l.exports=h);let y=class{constructor(){this.audio=document.getElementById("audioPlayer"),this.currentSong=null,this.currentPlaylist=[],this.currentIndex=0,this.isPlaying=!1,this.isShuffle=!1,this.repeatMode="off",this.volume=.7,this.userData=musicData.getUserData(),this.initializeElements(),this.bindEvents(),this.loadUserSettings()}initializeElements(){this.playBtn=document.getElementById("playBtn"),this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.shuffleBtn=document.getElementById("shuffleBtn"),this.repeatBtn=document.getElementById("repeatBtn"),this.favoriteBtn=document.getElementById("favoriteBtn"),this.progressSlider=document.getElementById("progressSlider"),this.volumeSlider=document.getElementById("volumeSlider"),this.currentTimeEl=document.getElementById("currentTime"),this.totalTimeEl=document.getElementById("totalTime"),this.currentArtwork=document.getElementById("currentArtwork"),this.currentTitle=document.getElementById("currentTitle"),this.currentArtist=document.getElementById("currentArtist"),this.queueBtn=document.getElementById("queueBtn"),this.queueSidebar=document.getElementById("queueSidebar"),this.closeQueue=document.getElementById("closeQueue"),this.queueContent=document.getElementById("queueContent"),this.visualizer=document.getElementById("visualizer"),this.muteBtn=document.getElementById("muteBtn"),this.volumeBtn=document.getElementById("volumeBtn")}bindEvents(){this.playBtn.addEventListener("click",()=>this.togglePlayPause()),this.prevBtn.addEventListener("click",()=>this.previousSong()),this.nextBtn.addEventListener("click",()=>this.nextSong()),this.shuffleBtn.addEventListener("click",()=>this.toggleShuffle()),this.repeatBtn.addEventListener("click",()=>this.toggleRepeat()),this.favoriteBtn.addEventListener("click",()=>this.toggleFavorite()),this.progressSlider.addEventListener("input",()=>this.seekTo()),this.volumeSlider.addEventListener("input",()=>this.setVolume()),this.muteBtn.addEventListener("click",()=>this.toggleMute()),this.queueBtn.addEventListener("click",()=>this.toggleQueue()),this.closeQueue.addEventListener("click",()=>this.toggleQueue()),this.audio.addEventListener("loadedmetadata",()=>this.updateDuration()),this.audio.addEventListener("timeupdate",()=>this.updateProgress()),this.audio.addEventListener("ended",()=>this.handleSongEnd()),this.audio.addEventListener("play",()=>this.onPlay()),this.audio.addEventListener("pause",()=>this.onPause()),this.audio.addEventListener("error",t=>this.handleError(t)),document.addEventListener("keydown",t=>this.handleKeyboard(t))}loadUserSettings(){this.volume=this.userData.settings.volume/100,this.isShuffle=this.userData.settings.shuffle,this.repeatMode=this.userData.settings.repeat,this.audio.volume=this.volume,this.volumeSlider.value=this.userData.settings.volume,this.updateShuffleButton(),this.updateRepeatButton()}playSong(t,e=[]){t&&(this.currentSong=t,this.currentPlaylist=e.length>0?e:[t],this.currentIndex=this.currentPlaylist.findIndex(s=>s.id===t.id),this.updateSongInfo(),this.updateFavoriteButton(),this.audio.src=t.url,this.audio.load(),this.addToRecentlyPlayed(t),this.updateQueue(),this.audio.play().catch(s=>{console.error("Error playing audio:",s),this.showError("Unable to play this song")}))}togglePlayPause(){if(!this.currentSong){const t=musicData.songs[musicData.popularSongs[0]];this.playSong(t,musicData.popularSongs.map(e=>musicData.songs[e]));return}this.isPlaying?this.audio.pause():this.audio.play().catch(t=>{console.error("Error playing audio:",t),this.showError("Unable to play this song")})}previousSong(){this.currentPlaylist.length!==0&&(this.isShuffle?this.currentIndex=Math.floor(Math.random()*this.currentPlaylist.length):this.currentIndex=this.currentIndex>0?this.currentIndex-1:this.currentPlaylist.length-1,this.playSong(this.currentPlaylist[this.currentIndex],this.currentPlaylist))}nextSong(){this.currentPlaylist.length!==0&&(this.isShuffle?this.currentIndex=Math.floor(Math.random()*this.currentPlaylist.length):this.currentIndex=this.currentIndex<this.currentPlaylist.length-1?this.currentIndex+1:0,this.playSong(this.currentPlaylist[this.currentIndex],this.currentPlaylist))}toggleShuffle(){this.isShuffle=!this.isShuffle,this.updateShuffleButton(),this.saveUserSettings()}toggleRepeat(){const t=["off","all","one"],e=t.indexOf(this.repeatMode);this.repeatMode=t[(e+1)%t.length],this.updateRepeatButton(),this.saveUserSettings()}toggleFavorite(){if(!this.currentSong)return;const t=this.userData.favorites,e=t.indexOf(this.currentSong.id);e>-1?t.splice(e,1):t.push(this.currentSong.id),this.updateFavoriteButton(),this.saveUserData(),window.dispatchEvent(new CustomEvent("favoritesUpdated"))}seekTo(){if(!this.audio.duration)return;const t=this.progressSlider.value/100*this.audio.duration;this.audio.currentTime=t}setVolume(){this.volume=this.volumeSlider.value/100,this.audio.volume=this.volume,this.updateVolumeIcon(),this.saveUserSettings()}toggleMute(){this.audio.volume>0?(this.audio.volume=0,this.volumeSlider.value=0):(this.audio.volume=this.volume,this.volumeSlider.value=this.volume*100),this.updateVolumeIcon()}toggleQueue(){this.queueSidebar.classList.toggle("open")}updateSongInfo(){this.currentSong&&(this.currentArtwork.src=this.currentSong.artwork,this.currentTitle.textContent=this.currentSong.title,this.currentArtist.textContent=this.currentSong.artist,document.title=`${this.currentSong.title} - ${this.currentSong.artist} | MusiQue`)}updateDuration(){this.audio.duration&&(this.totalTimeEl.textContent=this.formatTime(this.audio.duration))}updateProgress(){if(this.audio.duration){const t=this.audio.currentTime/this.audio.duration*100;this.progressSlider.value=t;const e=document.querySelector(".progress-fill");e&&(e.style.width=`${t}%`),this.currentTimeEl.textContent=this.formatTime(this.audio.currentTime)}}updateShuffleButton(){this.shuffleBtn.classList.toggle("active",this.isShuffle)}updateRepeatButton(){this.repeatBtn.classList.remove("active","repeat-one"),this.repeatMode==="all"?(this.repeatBtn.classList.add("active"),this.repeatBtn.innerHTML='<i class="fas fa-redo"></i>'):this.repeatMode==="one"?(this.repeatBtn.classList.add("active","repeat-one"),this.repeatBtn.innerHTML='<i class="fas fa-redo-alt"></i>'):this.repeatBtn.innerHTML='<i class="fas fa-redo"></i>'}updateFavoriteButton(){if(!this.currentSong)return;const t=this.userData.favorites.includes(this.currentSong.id);this.favoriteBtn.classList.toggle("active",t);const e=this.favoriteBtn.querySelector("i");e.className=t?"fas fa-heart":"far fa-heart"}updateVolumeIcon(){const t=this.muteBtn.querySelector("i"),e=this.audio.volume;e===0?t.className="fas fa-volume-mute":e<.5?t.className="fas fa-volume-down":t.className="fas fa-volume-up"}updateQueue(){this.queueContent&&(this.queueContent.innerHTML="",this.currentPlaylist.forEach((t,e)=>{const s=document.createElement("div");s.className=`queue-item ${e===this.currentIndex?"active":""}`,s.innerHTML=`
                <img src="${t.artwork}" alt="${t.title}">
                <div class="queue-song-info">
                    <div class="queue-song-title">${t.title}</div>
                    <div class="queue-song-artist">${t.artist}</div>
                </div>
                <div class="queue-song-duration">${t.duration}</div>
            `,s.addEventListener("click",()=>{this.currentIndex=e,this.playSong(t,this.currentPlaylist)}),this.queueContent.appendChild(s)}))}onPlay(){this.isPlaying=!0,this.playBtn.innerHTML='<i class="fas fa-pause"></i>',this.visualizer.classList.add("active"),document.querySelectorAll(".song-item").forEach(t=>{var s;t.dataset.songId===((s=this.currentSong)==null?void 0:s.id)?t.classList.add("playing"):t.classList.remove("playing")})}onPause(){this.isPlaying=!1,this.playBtn.innerHTML='<i class="fas fa-play"></i>',this.visualizer.classList.remove("active")}handleSongEnd(){this.repeatMode==="one"?(this.audio.currentTime=0,this.audio.play()):this.repeatMode==="all"||this.currentIndex<this.currentPlaylist.length-1?this.nextSong():this.onPause()}handleError(t){console.error("Audio error:",t),this.showError("Error playing audio. Trying next song..."),setTimeout(()=>{this.nextSong()},2e3)}handleKeyboard(t){if(t.target.tagName!=="INPUT")switch(t.code){case"Space":t.preventDefault(),this.togglePlayPause();break;case"ArrowLeft":t.preventDefault(),this.previousSong();break;case"ArrowRight":t.preventDefault(),this.nextSong();break;case"ArrowUp":t.preventDefault(),this.volumeSlider.value=Math.min(100,parseInt(this.volumeSlider.value)+5),this.setVolume();break;case"ArrowDown":t.preventDefault(),this.volumeSlider.value=Math.max(0,parseInt(this.volumeSlider.value)-5),this.setVolume();break}}addToRecentlyPlayed(t){const e=this.userData.recentlyPlayed,s=e.findIndex(a=>a===t.id);s>-1&&e.splice(s,1),e.unshift(t.id),e.length>50&&e.splice(50),this.saveUserData()}saveUserSettings(){this.userData.settings.volume=Math.round(this.volume*100),this.userData.settings.shuffle=this.isShuffle,this.userData.settings.repeat=this.repeatMode,this.saveUserData()}saveUserData(){musicData.saveUserData(this.userData)}formatTime(t){if(isNaN(t))return"0:00";const e=Math.floor(t/60),s=Math.floor(t%60);return`${e}:${s.toString().padStart(2,"0")}`}showError(t){const e=document.createElement("div");e.className="toast error",e.textContent=t,e.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--error-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `,document.body.appendChild(e),setTimeout(()=>{e.remove()},3e3)}};document.addEventListener("DOMContentLoaded",()=>{new y});class f{constructor(){this.currentSection="home",this.searchTimeout=null,this.initializeElements(),this.bindEvents(),this.loadInitialContent()}initializeElements(){this.navItems=document.querySelectorAll(".nav-item"),this.contentSections=document.querySelectorAll(".content-section"),this.searchInput=document.getElementById("searchInput"),this.searchResults=document.getElementById("searchResults"),this.featuredPlaylists=document.getElementById("featuredPlaylists"),this.popularSongs=document.getElementById("popularSongs"),this.libraryContent=document.getElementById("libraryContent"),this.userPlaylists=document.getElementById("userPlaylists"),this.favoritesList=document.getElementById("favoritesList"),this.themeToggle=document.getElementById("themeToggle"),this.libraryTabs=document.querySelectorAll(".tab-btn")}bindEvents(){this.navItems.forEach(e=>{e.addEventListener("click",()=>{const s=e.dataset.section;this.switchSection(s)})}),this.searchInput&&(this.searchInput.addEventListener("input",e=>{this.handleSearch(e.target.value)}),this.searchInput.addEventListener("focus",()=>{this.switchSection("search")})),this.themeToggle&&this.themeToggle.addEventListener("click",()=>{this.toggleTheme()}),this.libraryTabs.forEach(e=>{e.addEventListener("click",()=>{const s=e.dataset.tab;this.switchLibraryTab(s)})}),window.addEventListener("favoritesUpdated",()=>{this.updateFavoritesList()});const t=document.getElementById("createPlaylist");t&&t.addEventListener("click",()=>{modalManager.showCreatePlaylistModal()})}loadInitialContent(){this.loadFeaturedPlaylists(),this.loadPopularSongs(),this.loadUserPlaylists(),this.updateFavoritesList(),this.loadLibraryContent("recent"),this.loadTheme()}switchSection(t){switch(this.navItems.forEach(e=>{e.classList.toggle("active",e.dataset.section===t)}),this.contentSections.forEach(e=>{e.classList.toggle("active",e.id===t)}),this.currentSection=t,t){case"search":this.searchInput&&setTimeout(()=>this.searchInput.focus(),100);break;case"library":this.loadLibraryContent("recent");break;case"favorites":this.updateFavoritesList();break;case"playlists":this.loadUserPlaylists();break}}handleSearch(t){if(clearTimeout(this.searchTimeout),!!this.searchResults){if(!t||t.length<2){this.searchResults.innerHTML=`
                <div class="search-empty">
                    <i class="fas fa-search fa-3x"></i>
                    <h3>Search for Tamil music</h3>
                    <p>Find your favorite Tamil songs, artists, and albums</p>
                    <ul class="search-suggestions">
                        <li onclick="uiManager.searchInput.value='A.R. Rahman'; uiManager.handleSearch('A.R. Rahman')">A.R. Rahman</li>
                        <li onclick="uiManager.searchInput.value='Ilayaraja'; uiManager.handleSearch('Ilayaraja')">Ilayaraja</li>
                        <li onclick="uiManager.searchInput.value='Anirudh'; uiManager.handleSearch('Anirudh')">Anirudh</li>
                        <li onclick="uiManager.searchInput.value='Yuvan Shankar Raja'; uiManager.handleSearch('Yuvan Shankar Raja')">Yuvan Shankar Raja</li>
                        <li onclick="uiManager.searchInput.value='Roja'; uiManager.handleSearch('Roja')">Roja</li>
                        <li onclick="uiManager.searchInput.value='Ponniyin Selvan'; uiManager.handleSearch('Ponniyin Selvan')">Ponniyin Selvan</li>
                    </ul>
                </div>
            `;return}this.searchResults.innerHTML=`
            <div class="loading">
                <div class="spinner"></div>
                <p>Searching...</p>
            </div>
        `,this.searchTimeout=setTimeout(()=>{const e=musicData.searchSongs(t);this.displaySearchResults(e,t)},300)}}displaySearchResults(t,e){if(!this.searchResults)return;if(t.length===0){this.searchResults.innerHTML=`
                <div class="no-results">
                    <i class="fas fa-music fa-3x"></i>
                    <h3>No results found</h3>
                    <p>No Tamil songs found for "${e}". Try searching for:</p>
                    <ul class="search-suggestions">
                        <li onclick="uiManager.searchInput.value='A.R. Rahman'; uiManager.handleSearch('A.R. Rahman')">A.R. Rahman</li>
                        <li onclick="uiManager.searchInput.value='Ilayaraja'; uiManager.handleSearch('Ilayaraja')">Ilayaraja</li>
                        <li onclick="uiManager.searchInput.value='Anirudh'; uiManager.handleSearch('Anirudh')">Anirudh</li>
                        <li onclick="uiManager.searchInput.value='Yuvan Shankar Raja'; uiManager.handleSearch('Yuvan Shankar Raja')">Yuvan Shankar Raja</li>
                        <li onclick="uiManager.searchInput.value='Roja'; uiManager.handleSearch('Roja')">Roja</li>
                        <li onclick="uiManager.searchInput.value='Ponniyin Selvan'; uiManager.handleSearch('Ponniyin Selvan')">Ponniyin Selvan</li>
                    </ul>
                </div>
            `;return}const s=`
            <div class="search-results-header">
                <h3>Search Results for "${e}" (${t.length} songs)</h3>
            </div>
            <div class="song-list">
                ${t.map((a,i)=>this.createSongItemHTML(a,i+1)).join("")}
            </div>
        `;this.searchResults.innerHTML=s,this.bindSongEvents(this.searchResults)}loadFeaturedPlaylists(){if(!this.featuredPlaylists)return;const t=musicData.featuredPlaylists.map(e=>`
            <div class="playlist-card" data-playlist-id="${e.id}">
                <div class="playlist-image">
                    <img src="${e.image}" alt="${e.name}">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="playlist-info">
                    <h3>${e.name}</h3>
                    <p>${e.description}</p>
                    <span class="song-count">${e.songs.length} songs</span>
                </div>
            </div>
        `).join("");this.featuredPlaylists.innerHTML=t,this.featuredPlaylists.querySelectorAll(".playlist-card").forEach(e=>{e.addEventListener("click",()=>{const s=e.dataset.playlistId;this.playPlaylist(s)})})}loadPopularSongs(){if(!this.popularSongs)return;const t=musicData.popularSongs.map((e,s)=>{const a=musicData.songs[e];return a?this.createSongItemHTML(a,s+1):""}).join("");this.popularSongs.innerHTML=t,this.bindSongEvents(this.popularSongs)}createSongItemHTML(t,e=""){if(!t)return"";const a=musicData.getUserData().favorites.includes(t.id);return`
            <div class="song-item" data-song-id="${t.id}">
                <div class="song-number">${e}</div>
                <div class="song-info">
                    <img src="${t.artwork}" alt="${t.title}" class="song-artwork">
                    <div class="song-details">
                        <h4>${t.title}</h4>
                        <p>${t.artist}</p>
                    </div>
                </div>
                <div class="song-album">${t.album}</div>
                <div class="song-duration">${t.duration}</div>
                <div class="song-actions">
                    <button class="btn-icon favorite-song ${a?"active":""}" data-song-id="${t.id}">
                        <i class="${a?"fas":"far"} fa-heart"></i>
                    </button>
                    <button class="btn-icon add-to-playlist" data-song-id="${t.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `}bindSongEvents(t){t&&(t.querySelectorAll(".song-item").forEach(e=>{e.addEventListener("click",s=>{if(s.target.closest(".song-actions"))return;const a=e.dataset.songId,i=musicData.songs[a],n=this.getCurrentPlaylist();musicPlayer&&i&&musicPlayer.playSong(i,n)})}),t.querySelectorAll(".favorite-song").forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation(),this.toggleSongFavorite(e.dataset.songId)})}),t.querySelectorAll(".add-to-playlist").forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation(),modalManager.showAddToPlaylistModal(e.dataset.songId)})}))}getCurrentPlaylist(){switch(this.currentSection){case"home":return musicData.popularSongs.map(s=>musicData.songs[s]).filter(Boolean);case"search":const t=this.searchInput?this.searchInput.value:"";return musicData.searchSongs(t);case"favorites":return musicData.getUserData().favorites.map(s=>musicData.songs[s]).filter(Boolean);default:return Object.values(musicData.songs)}}playPlaylist(t){const e=musicData.getPlaylistSongs(t);e.length>0&&musicPlayer&&musicPlayer.playSong(e[0],e)}toggleSongFavorite(t){const e=musicData.getUserData(),s=e.favorites.indexOf(t);s>-1?(e.favorites.splice(s,1),modalManager.showToast("Removed from favorites","info")):(e.favorites.push(t),modalManager.showToast("Added to favorites","success")),musicData.saveUserData(e),this.updateFavoriteButtons(t),this.updateFavoritesList(),musicPlayer&&musicPlayer.currentSong&&musicPlayer.currentSong.id===t&&musicPlayer.updateFavoriteButton()}updateFavoriteButtons(t){const s=musicData.getUserData().favorites.includes(t);document.querySelectorAll(`[data-song-id="${t}"] .favorite-song`).forEach(a=>{a.classList.toggle("active",s);const i=a.querySelector("i");i.className=s?"fas fa-heart":"far fa-heart"})}updateFavoritesList(){if(!this.favoritesList)return;const e=musicData.getUserData().favorites.map(a=>musicData.songs[a]).filter(Boolean);if(e.length===0){this.favoritesList.innerHTML=`
                <div class="empty-favorites">
                    <i class="fas fa-heart fa-3x"></i>
                    <h3>No favorite songs yet</h3>
                    <p>Songs you like will appear here</p>
                </div>
            `;return}const s=e.map((a,i)=>this.createSongItemHTML(a,i+1)).join("");this.favoritesList.innerHTML=`<div class="song-list">${s}</div>`,this.bindSongEvents(this.favoritesList)}loadLibraryContent(t){if(!this.libraryContent)return;this.libraryTabs.forEach(a=>{a.classList.toggle("active",a.dataset.tab===t)});const e=musicData.getUserData();let s="";switch(t){case"recent":const a=e.recentlyPlayed.map(r=>musicData.songs[r]).filter(Boolean);a.length===0?s=`
                        <div class="empty-recent">
                            <i class="fas fa-clock fa-3x"></i>
                            <h3>No recently played songs</h3>
                            <p>Start listening to see your recent tracks here</p>
                        </div>
                    `:s=`<div class="song-list">${a.slice(0,20).map((c,d)=>this.createSongItemHTML(c,d+1)).join("")}</div>`;break;case"artists":const i=this.getUniqueArtists();s=this.createArtistsGrid(i);break;case"albums":const n=this.getUniqueAlbums();s=this.createAlbumsGrid(n);break}this.libraryContent.innerHTML=s,t==="recent"&&this.bindSongEvents(this.libraryContent)}switchLibraryTab(t){this.loadLibraryContent(t)}getUniqueArtists(){const t=new Map;return Object.values(musicData.songs).forEach(e=>{const s=e.artist.split(",")[0].trim();t.has(s)||t.set(s,{name:s,image:e.artwork,songs:[]}),t.get(s).songs.push(e)}),Array.from(t.values())}getUniqueAlbums(){const t=new Map;return Object.values(musicData.songs).forEach(e=>{const s=`${e.album}-${e.artist.split(",")[0].trim()}`;t.has(s)||t.set(s,{name:e.album,artist:e.artist.split(",")[0].trim(),image:e.artwork,songs:[]}),t.get(s).songs.push(e)}),Array.from(t.values())}createArtistsGrid(t){return`<div class="artists-grid">${t.map(s=>`
            <div class="artist-card" data-artist="${s.name}">
                <img src="${s.image}" alt="${s.name}">
                <h3>${s.name}</h3>
                <p>${s.songs.length} song${s.songs.length!==1?"s":""}</p>
            </div>
        `).join("")}</div>`}createAlbumsGrid(t){return`<div class="albums-grid">${t.map(s=>`
            <div class="album-card" data-album="${s.name}" data-artist="${s.artist}">
                <img src="${s.image}" alt="${s.name}">
                <h3>${s.name}</h3>
                <p>${s.artist}</p>
                <span class="song-count">${s.songs.length} tracks</span>
            </div>
        `).join("")}</div>`}loadUserPlaylists(){if(!this.userPlaylists)return;const t=musicData.getUserData();if(t.playlists.length===0){this.userPlaylists.innerHTML=`
                <div class="empty-playlists">
                    <i class="fas fa-music fa-3x"></i>
                    <h3>No playlists yet</h3>
                    <p>Create your first playlist to organize your favorite Tamil songs</p>
                    <button class="btn-primary" onclick="modalManager.showCreatePlaylistModal()">
                        <i class="fas fa-plus"></i>
                        Create Your First Playlist
                    </button>
                </div>
            `;return}const e=t.playlists.map(s=>`
            <div class="playlist-card user-playlist" data-playlist-id="${s.id}">
                <div class="playlist-image">
                    <img src="${s.image||"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300"}" alt="${s.name}">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="playlist-info">
                    <h3>${s.name}</h3>
                    <p>${s.description||""}</p>
                    <span class="song-count">${s.songs.length} songs</span>
                    <div class="playlist-actions">
                        <button class="btn-icon edit-playlist" data-playlist-id="${s.id}" title="Edit playlist">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon delete-playlist" data-playlist-id="${s.id}" title="Delete playlist">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join("");this.userPlaylists.innerHTML=e,this.bindPlaylistEvents()}bindPlaylistEvents(){this.userPlaylists&&(this.userPlaylists.querySelectorAll(".user-playlist").forEach(t=>{t.addEventListener("click",e=>{if(e.target.closest(".playlist-actions"))return;const s=t.dataset.playlistId;this.playUserPlaylist(s)})}),this.userPlaylists.querySelectorAll(".edit-playlist").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),modalManager.showEditPlaylistModal(t.dataset.playlistId)})}),this.userPlaylists.querySelectorAll(".delete-playlist").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),this.deletePlaylist(t.dataset.playlistId)})}))}deletePlaylist(t){const e=musicData.getUserData(),s=e.playlists.find(a=>a.id===t);s&&modalManager.showConfirmModal("Delete Playlist",`Are you sure you want to delete "${s.name}"? This action cannot be undone.`,()=>{e.playlists=e.playlists.filter(a=>a.id!==t),musicData.saveUserData(e),this.loadUserPlaylists(),modalManager.showToast("Playlist deleted successfully!","success")})}playUserPlaylist(t){const s=musicData.getUserData().playlists.find(i=>i.id===t);if(!s||s.songs.length===0){modalManager.showToast("This playlist is empty!","warning");return}const a=s.songs.map(i=>musicData.songs[i]).filter(Boolean);a.length>0&&musicPlayer&&musicPlayer.playSong(a[0],a)}toggleTheme(){const e=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";if(document.documentElement.setAttribute("data-theme",e),this.themeToggle){const a=this.themeToggle.querySelector("i");a.className=e==="light"?"fas fa-sun":"fas fa-moon"}const s=musicData.getUserData();s.settings.theme=e,musicData.saveUserData(s)}loadTheme(){const e=musicData.getUserData().settings.theme||"dark";if(document.documentElement.setAttribute("data-theme",e),this.themeToggle){const s=this.themeToggle.querySelector("i");s.className=e==="light"?"fas fa-sun":"fas fa-moon"}}}document.addEventListener("DOMContentLoaded",()=>{new f});class p{constructor(){this.isInitialized=!1,this.init()}async init(){try{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.initialize()):this.initialize()}catch(t){console.error("Error initializing app:",t),this.showError("Failed to initialize the application")}}initialize(){this.isInitialized||(this.initServiceWorker(),this.initKeyboardShortcuts(),this.initMediaSession(),this.initNotifications(),this.initAnalytics(),this.setupErrorHandling(),this.initPWA(),this.isInitialized=!0,console.log("MusicApp initialized successfully"))}initServiceWorker(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(t=>{console.log("Service Worker registered:",t)}).catch(t=>{console.log("Service Worker registration failed:",t)})}initKeyboardShortcuts(){const t={KeyM:()=>this.toggleMute(),KeyF:()=>this.toggleFullscreen(),KeyL:()=>this.toggleLike(),KeyQ:()=>this.toggleQueue(),KeyS:()=>this.focusSearch(),Digit1:()=>this.switchToSection("home"),Digit2:()=>this.switchToSection("search"),Digit3:()=>this.switchToSection("library"),Digit4:()=>this.switchToSection("playlists"),Digit5:()=>this.switchToSection("favorites")};document.addEventListener("keydown",e=>{if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")&&(e.ctrlKey||e.metaKey)){const s=t[e.code];s&&(e.preventDefault(),s())}})}initMediaSession(){"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>{musicPlayer&&musicPlayer.togglePlayPause()}),navigator.mediaSession.setActionHandler("pause",()=>{musicPlayer&&musicPlayer.togglePlayPause()}),navigator.mediaSession.setActionHandler("previoustrack",()=>{musicPlayer&&musicPlayer.previousSong()}),navigator.mediaSession.setActionHandler("nexttrack",()=>{musicPlayer&&musicPlayer.nextSong()}),navigator.mediaSession.setActionHandler("seekbackward",t=>{musicPlayer&&musicPlayer.audio&&(musicPlayer.audio.currentTime=Math.max(0,musicPlayer.audio.currentTime-(t.seekOffset||10)))}),navigator.mediaSession.setActionHandler("seekforward",t=>{musicPlayer&&musicPlayer.audio&&(musicPlayer.audio.currentTime=Math.min(musicPlayer.audio.duration,musicPlayer.audio.currentTime+(t.seekOffset||10)))}))}updateMediaSession(t){"mediaSession"in navigator&&t&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title,artist:t.artist,album:t.album,artwork:[{src:t.artwork,sizes:"96x96",type:"image/jpeg"},{src:t.artwork,sizes:"128x128",type:"image/jpeg"},{src:t.artwork,sizes:"192x192",type:"image/jpeg"},{src:t.artwork,sizes:"256x256",type:"image/jpeg"},{src:t.artwork,sizes:"384x384",type:"image/jpeg"},{src:t.artwork,sizes:"512x512",type:"image/jpeg"}]}))}initNotifications(){"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}showNotification(t,e={}){"Notification"in window&&Notification.permission==="granted"&&new Notification(t,{icon:"/favicon.ico",badge:"/favicon.ico",...e})}initAnalytics(){console.log("Analytics initialized")}setupErrorHandling(){window.addEventListener("error",t=>{console.error("Global error:",t.error),this.showError("An unexpected error occurred")}),window.addEventListener("unhandledrejection",t=>{console.error("Unhandled promise rejection:",t.reason),this.showError("An unexpected error occurred")})}initPWA(){window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.showInstallButton()}),window.addEventListener("appinstalled",()=>{console.log("PWA was installed"),this.hideInstallButton()})}showInstallButton(){if(!document.getElementById("installButton")){const t=document.createElement("button");t.id="installButton",t.className="btn-primary install-btn",t.innerHTML='<i class="fas fa-download"></i> Install App',t.style.cssText=`
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
            `,t.addEventListener("click",()=>{this.installApp()}),document.body.appendChild(t)}}hideInstallButton(){const t=document.getElementById("installButton");t&&t.remove()}async installApp(){const t=document.getElementById("installButton");if(t&&(t.style.display="none"),window.deferredPrompt){window.deferredPrompt.prompt();const{outcome:e}=await window.deferredPrompt.userChoice;console.log(`User response to the install prompt: ${e}`),window.deferredPrompt=null}}toggleMute(){musicPlayer&&musicPlayer.toggleMute()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}toggleLike(){musicPlayer&&musicPlayer.toggleFavorite()}toggleQueue(){musicPlayer&&musicPlayer.toggleQueue()}focusSearch(){const t=document.getElementById("searchInput");t&&t.focus()}switchToSection(t){uiManager&&uiManager.switchSection(t)}showError(t){const e=document.createElement("div");e.className="toast error",e.textContent=t,e.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--error-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3)}showSuccess(t){const e=document.createElement("div");e.className="toast success",e.textContent=t,e.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `,document.body.appendChild(e),setTimeout(()=>{e.remove()},3e3)}measurePerformance(){"performance"in window&&window.addEventListener("load",()=>{const t=performance.getEntriesByType("navigation")[0];console.log("Page load time:",t.loadEventEnd-t.loadEventStart)})}monitorMemory(){"memory"in performance&&setInterval(()=>{const t=performance.memory;console.log("Memory usage:",{used:Math.round(t.usedJSHeapSize/1048576)+" MB",total:Math.round(t.totalJSHeapSize/1048576)+" MB",limit:Math.round(t.jsHeapSizeLimit/1048576)+" MB"})},3e4)}}const u=new p;typeof l<"u"&&l.exports&&(l.exports=p);window.formatTime=o=>{if(isNaN(o))return"0:00";const t=Math.floor(o/60),e=Math.floor(o%60);return`${t}:${e.toString().padStart(2,"0")}`};window.debounce=(o,t)=>{let e;return function(...a){const i=()=>{clearTimeout(e),o(...a)};clearTimeout(e),e=setTimeout(i,t)}};window.throttle=(o,t)=>{let e;return function(){const s=arguments,a=this;e||(o.apply(a,s),e=!0,setTimeout(()=>e=!1,t))}};document.addEventListener("DOMContentLoaded",()=>{const o=MusicPlayer.prototype.playSong;MusicPlayer.prototype.playSong=function(t,e){o.call(this,t,e),u&&u.updateMediaSession(t)}})});export default v();
