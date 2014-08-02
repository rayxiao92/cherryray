thistring="Hello 亲爱的张确小朋友\n\n我现在正在被窝里打这封信的草稿。我知道这么看信的感觉一定碉(NERDY)堡了。8月2/3号是中国的情人节，也是我和你officially在一起的第100天。如果你忘记了我不会怪你的，谁让我就是负责来帮你记数字的呢。首先祝你情人节快乐，100天快乐，真希望现在可以在身边和你庆祝一下:)\n\n虽说这一百天里面我们很长很长时间没在一起，但是自从认识你之后就开始大约是三周一次的频率一起出来玩，不管是单独行动还是和大家一起，有很多很多好玩的事情可以让我在见不到你的时候去回忆。其实算算看玩的很熟也已经很久了:) 眼看就快回家了，这十一周其实也没想像的那么难熬。这次七夕没能在一起庆祝，但还想趁着过节跟你说点心里话，交流交流感情，为了日后我们革命情谊坚实发展打下一个良好基础。\n\n前两天Vivian来找我八卦和你的故事，她问我：“你最珍惜Cherry的事情是什么”。现在既然过节了，我就说点好听的夸夸你好了。\n\n第一件小事情是，我常常觉得我高三时候像极了你现在的样子：比较天真但还懂点事儿，很善良，比较无私。但自从进入了大学后，功利心年年加重，一方面是对社会有了更多的接触，另一方面也是很多朋友们给我带来的影响。我并不是说这些特质不好，但是他们给我带来的很多个人主义，很现实的想法是不会从其他孩子那里听到的，比如说家庭人脉关系、仕途发展等等。我常常觉得这些想法一方面让我更成熟，另一方面让我变成了一个冷血、少了很多生活情趣的人。我过去的一些方面你都没有看到过，比如两年前我也是一个天天盯着名牌买的大一小屁孩，再比如和人交往时候的一长一短都会想得很精明。我猜这些事情你也有所感觉，可是我想说在我看到了你对朋友们很无私，你身边的朋友真心非常的尊重，喜欢你的时候，我觉得自己过去很多计较那一长一短的时候都没有意义。记得去年你过生日的时候，我自己就在北京权衡半天，最后得出了一个“给自己稍微有点喜欢的妹子”送礼物不合适这么一个结论，然后就让此事作罢了。结果在我生日那天你叫着好多人陪我过，还给我准备了那么大一个蛋糕。我那天在muse想了很多，你让我感觉非常非常惭愧。\n\n第二件小事情是在大约80天前，当你告诉我你故意在转学出结果之前跟我在一起的时候，我觉得你真是一个很特别的女同学，觉得自己被一个这么聪明、懂人事的妹子喜欢真是很受宠若惊。让我一个从小被扣上聪明、有人情味的大帽子的人压力很大。这件事情越想越让我觉得你实在太cool了，觉得自己好幸运好幸运。像我第一段说的那样,我觉得你不是一个很有心眼的妹子。闹了半天心眼都用在了这么sweet的事情上来。从那之后我告诉自己一定要对你特别特别好, 让你因为我而更开心, 让你的生活更有意思。跟你在一起的时候我觉得我可以不去care很多乱七八糟的事情, 什么banking不banking的, 什么谁跟谁又怎么样了。也许这才是我喜欢的简简单单的生活, 只是自己原来一直不知道。与此同时, 看到你的生活中又在经历着很多很多的变化, 去西班牙玩, 做不同的实习, 参加公益活动, 下学期想炒股票, 还想开始学cs。。。一个妹子对多样性的追求是我很少很少看到的, 这一点我真的非常欣赏你。\n\n记得你说你上次开始谈恋爱是因为看到了一个终点才选择了开始，我不知道你现在有没有看到那个终点，希望你不要再坚持你自己的诡异的理论了 lol 我觉得跟你在一起就是很简单很开心很和谐（wink wink）的事情，我希望你也是这么认为的。我想和你有很多很多的交流，我们彼此因为知道对方开心了而很开心，知道对方不开心了想办法帮对方开心。好吧 我怎么说话跟小朋友一样了。总之，我很期待接下来跟你一起分享的日子，起码过去的100天是非常非常开心的，预祝之后也开心咯～\n\n本来想手写寄给你的后来没算好时间弄晚了那就用一个nerdy的方法让你看到吧～看真迹就下次吧! \n\n好了～先说这么多了～希望你都看懂了～字没蹦的太快～\n\n么么哒"
//thistring='haha ahha ahha'
play=0
index=0
alphabet="qwertyuiopasdfghjklzxcvbnm:)QWERTYUIOPASDFGHJKLZXCVBNM1234567890"
together =""
word_stream=""
swipded=0
$("body").on("swipeleft",function(){
    if (swipded!=0){
        
    } else {
        swipded++
        document.getElementById("word").style.textAlign="left"
        para_stream=thistring.split("\n\n")
        //console.log(para_stream.length)

        for (var i = 0; i < para_stream.length; i++) {
            sentence_stream=para_stream[i].split(/。|，|,/);
            for (var j = 0; j < sentence_stream.length; j++) {
                //console.log(sentence_stream[j])
                for (var k in sentence_stream[j]){
                    if (alphabet.indexOf(sentence_stream[j][k])==-1){
                        if (together !=""){
                            //console.log(together)
                            word_stream+=(together+".")
                        }
                        together=""
                        word_stream+=(sentence_stream[j][k]+".")
                    } else {
                        together+=sentence_stream[j][k]
                    }
                }
                word_stream+=" . ."
            }
            word_stream+=" . . . .<br><br>"
        }

        document.getElementById("word").innerHTML=""
        word_array = word_stream.split('.')
        wa_counter = 0
        myInterval = setInterval(function(){
            wa_counter++
            if (wa_counter < word_array.length) {
                if (word_array[index]!=".") {
                    valid=word_array[index]
                }
                document.getElementById("word").innerHTML+= valid;
                index++;       
            } else {
                clearInterval(myInterval);
            }
        }, 200);
    }

});
