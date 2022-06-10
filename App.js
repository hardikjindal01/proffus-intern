import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
} from "@expo-google-fonts/dev";

export default function App (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Home_page}>
			<View style = {[stylesheet._Hello_there__how_can_we_serve_you_today___, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Hello_there__how_can_we_serve_you_today___, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Hello there,
how can we serve you today...
			</Text>
			</View>
			<View style = {[stylesheet._Categories, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Categories, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Categories
			</Text>
			</View>
			<View style = {[stylesheet._Featured_Products, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Featured_Products, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Featured Products
			</Text>
			</View>
			<View style = {[stylesheet._Most_Purchased_Products, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Most_Purchased_Products, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Most Purchased Products
			</Text>
			</View>
			<View style = {[stylesheet._Our_Media_Associates, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Our_Media_Associates, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Our Media Associates
			</Text>
			</View>
			<View style = {[stylesheet._VIEW_ALL, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._VIEW_ALL, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				VIEW ALL
			</Text>
			</View>
			<View style = {stylesheet._Ellipse_7}>
			</View>
			<View style = {stylesheet._Ellipse_8}>
			</View>
			<View style = {stylesheet._Ellipse_9}>
			</View>
			<View style = {stylesheet._Rectangle_102}>
			</View>
			<View style = {stylesheet._Rectangle_105}>
			</View>
			<View style = {stylesheet._Rectangle_103}>
			</View>
			<View style = {stylesheet._Rectangle_106}>
			</View>
			<View style = {stylesheet._Rectangle_104}>
			</View>
			<View style = {stylesheet._Rectangle_107}>
			</View>
			<Image style = {stylesheet._image_6} source = {{uri: imageUrl_image_6}}>
			</Image>
			<Image style = {stylesheet._image_7} source = {{uri: imageUrl_image_7}}>
			</Image>
			<Image style = {stylesheet._image_8} source = {{uri: imageUrl_image_8}}>
			</Image>
			<Image style = {stylesheet._image_9} source = {{uri: imageUrl_image_9}}>
			</Image>
			<Image style = {stylesheet._image_10} source = {{uri: imageUrl_image_10}}>
			</Image>
			<Image style = {stylesheet._image_11} source = {{uri: imageUrl_image_11}}>
			</Image>
			<View style = {[stylesheet.___ND_Care_Nirogam_Pvt__Ltd____All_rights_Reserved, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___ND_Care_Nirogam_Pvt__Ltd____All_rights_Reserved, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				© ND Care Nirogam Pvt. Ltd. - All rights Reserved
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_99}>
			</View>
			<View style = {stylesheet._Rectangle_109}>
			</View>
			<View style = {stylesheet._Rectangle_110}>
			</View>
			<Image style = {stylesheet._image_12} source = {{uri: imageUrl_image_12}}>
			</Image>
			<Image style = {stylesheet._image_13} source = {{uri: imageUrl_image_13}}>
			</Image>
			<Image style = {stylesheet._image_15} source = {{uri: imageUrl_image_15}}>
			</Image>
			<View style = {[stylesheet._Cephalgo, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Cephalgo, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Cephalgo
			</Text>
			</View>
			<View style = {[stylesheet._Stress_Care, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Stress_Care, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Stress Care
			</Text>
			</View>
			<View style = {[stylesheet._Rishtpusht_Immuno, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Rishtpusht_Immuno, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Rishtpusht Immuno
			</Text>
			</View>
			<Image style = {stylesheet._image_2} source = {{uri: imageUrl_image_2}}>
			</Image>
			<Image style = {stylesheet._image_14} source = {{uri: imageUrl_image_14}}>
			</Image>
			<Image style = {stylesheet._image_16} source = {{uri: imageUrl_image_16}}>
			</Image>
			<View style = {stylesheet._Line_27}>
			</View>
			<View style = {stylesheet._Line_30}>
			</View>
			<View style = {stylesheet._Line_34}>
			</View>
			<View style = {stylesheet._Line_28}>
			</View>
			<View style = {stylesheet._Line_31}>
			</View>
			<View style = {stylesheet._Line_35}>
			</View>
			<View style = {[stylesheet.___214_00, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___214_00, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				₹ 214.00
			</Text>
			</View>
			<View style = {[stylesheet.___850_00, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___850_00, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				₹ 850.00
			</Text>
			</View>
			<View style = {[stylesheet.___2500_00, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___2500_00, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				₹ 2500.00
			</Text>
			</View>
			<View style = {[stylesheet._ADD_TO_CART, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_TO_CART, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD TO CART
			</Text>
			</View>
			<View style = {[stylesheet._ADD_TO_CART_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_TO_CART_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD TO CART
			</Text>
			</View>
			<View style = {[stylesheet._ADD_TO_CART_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_TO_CART_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD TO CART
			</Text>
			</View>
			<View style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.
			</Text>
			</View>
			<View style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.
			</Text>
			</View>
			<View style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.
			</Text>
			</View>
			<View style = {[stylesheet._40_capsules, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._40_capsules, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				40 capsules
			</Text>
			</View>
			<View style = {[stylesheet._40_capsules_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._40_capsules_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				40 capsules
			</Text>
			</View>
			<View style = {[stylesheet._40_capsules_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._40_capsules_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				40 capsules
			</Text>
			</View>
			<View style = {stylesheet._bi_share_fill}>
				<View style = {stylesheet._Group}>
					<Svg style = {stylesheet._Vector} fill = {"rgba(20, 101, 136, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.312748141583695 2.344044297937898 C 10.312680114106643 1.7941373727049204 10.505974052243417 1.2617152908425129 10.858811900670036 0.8399296787918183 C 11.211649749096654 0.4181440667411237 11.701562833731595 0.1338539090725025 12.242837061777326 0.03679793675109617 C 12.784111289823057 -0.06025803557031017 13.342278851884274 0.036100684731959765 13.819683539094324 0.30901536141988933 C 14.297088226304375 0.581930038107819 14.663329519680653 1.0140216178927917 14.854330426292226 1.5296923286982402 C 15.045331332903798 2.045363039503689 15.048928985300453 2.611775382846165 14.86449420991546 3.1298308565594297 C 14.680059434530467 3.6478863302726943 14.319336478646605 4.084595695505509 13.84543721496231 4.363552969240585 C 13.371537951278015 4.642510242975661 12.814640359255531 4.74595177882363 12.272176850955725 4.655779604259797 C 11.72971334265592 4.565607429695963 11.236227779272514 4.287563259421547 10.878060325865725 3.8702939000445187 L 4.579936530992952 6.795293867910101 C 4.724724612585345 7.254142965847984 4.724724612585345 7.7464438718746536 4.579936530992952 8.205292969812536 L 10.878060325865725 11.13029249064334 C 11.256662439297582 10.68997770609903 11.785245292979459 10.405892370685743 12.36136744971422 10.333091793010112 C 12.93748960644898 10.260291215334481 13.520123719378303 10.403960132702787 13.996355275467081 10.736255472850553 C 14.47258683155586 11.06855081299832 14.808501366694506 11.565808412714647 14.938997926761667 12.131659336254073 C 15.069494486828829 12.697510259793498 14.985280112026835 13.291658820118439 14.702675652407304 13.798956904789677 C 14.420071192787773 14.306254989460914 13.959202099980061 14.69057641879425 13.409385148320059 14.877439931983128 C 12.859568196660057 15.064303445172007 12.259957768877145 15.040401305790484 11.726759504216288 14.810365939675414 C 11.19356123955543 14.580330573560344 10.76474518581461 14.160543891493695 10.523417769938954 13.632360453707207 C 10.282090354063298 13.104177015920719 10.245436865713994 12.505210873541404 10.42056042272297 11.951542765316132 L 4.122436180815377 9.02654324448533 C 3.810656077614701 9.389890654148973 3.3950769762934905 9.649037567683711 2.931603598334188 9.769123444683666 C 2.4681302203748854 9.889209321683621 1.9789968482816565 9.864472610279254 1.5300030398377678 9.698241610128601 C 1.081009231393879 9.532010609977949 0.6936946049359187 9.232260295809484 0.42016173906009224 8.839312562074703 C 0.14662887318426576 8.446364828339922 -2.2117723439839454e-16 7.979070964030371 0 7.50029319534393 C -6.114900009837966e-16 7.021515426657488 0.14662887318426576 6.554222456417495 0.42016173906009224 6.161274722682714 C 0.6936946049359187 5.768326988947933 1.081009231393879 5.46857578070991 1.5300030398377678 5.302344780559257 C 1.9789968482816565 5.136113780408604 2.4681302203748854 5.111377516039016 2.931603598334188 5.231463393038971 C 3.3950769762934905 5.351549270038926 3.810656077614701 5.610696630608446 4.122436180815377 5.974044040272088 L 10.42056042272297 3.0490442959238946 C 10.348869099705993 2.820920157157169 10.312510971113596 2.583168146536531 10.312748141583695 2.344044297937898 L 10.312748141583695 2.344044297937898 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._bi_share_fill_2}>
				<View style = {stylesheet._Group_2}>
					<Svg style = {stylesheet._Vector_2} fill = {"rgba(20, 101, 136, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.312748141583695 2.344044297937898 C 10.312680114106643 1.7941373727049204 10.505974052243417 1.2617152908425129 10.858811900670036 0.8399296787918183 C 11.211649749096654 0.4181440667411237 11.701562833731595 0.1338539090725025 12.242837061777326 0.03679793675109617 C 12.784111289823057 -0.06025803557031017 13.342278851884274 0.036100684731959765 13.819683539094324 0.30901536141988933 C 14.297088226304375 0.581930038107819 14.663329519680653 1.0140216178927917 14.854330426292226 1.5296923286982402 C 15.045331332903798 2.045363039503689 15.048928985300453 2.611775382846165 14.86449420991546 3.1298308565594297 C 14.680059434530467 3.6478863302726943 14.319336478646605 4.084595695505509 13.84543721496231 4.363552969240585 C 13.371537951278015 4.642510242975661 12.814640359255531 4.74595177882363 12.272176850955725 4.655779604259797 C 11.72971334265592 4.565607429695963 11.236227779272514 4.287563259421547 10.878060325865725 3.8702939000445187 L 4.579936530992952 6.795293867910101 C 4.724724612585345 7.254142965847984 4.724724612585345 7.7464438718746536 4.579936530992952 8.205292969812536 L 10.878060325865725 11.13029249064334 C 11.256662439297582 10.68997770609903 11.785245292979459 10.405892370685743 12.36136744971422 10.333091793010112 C 12.93748960644898 10.260291215334481 13.520123719378303 10.403960132702787 13.996355275467081 10.736255472850553 C 14.47258683155586 11.06855081299832 14.808501366694506 11.565808412714647 14.938997926761667 12.131659336254073 C 15.069494486828829 12.697510259793498 14.985280112026835 13.291658820118439 14.702675652407304 13.798956904789677 C 14.420071192787773 14.306254989460914 13.959202099980061 14.69057641879425 13.409385148320059 14.877439931983128 C 12.859568196660057 15.064303445172007 12.259957768877145 15.040401305790484 11.726759504216288 14.810365939675414 C 11.19356123955543 14.580330573560344 10.76474518581461 14.160543891493695 10.523417769938954 13.632360453707207 C 10.282090354063298 13.104177015920719 10.245436865713994 12.505210873541404 10.42056042272297 11.951542765316132 L 4.122436180815377 9.02654324448533 C 3.810656077614701 9.389890654148973 3.3950769762934905 9.649037567683711 2.931603598334188 9.769123444683666 C 2.4681302203748854 9.889209321683621 1.9789968482816565 9.864472610279254 1.5300030398377678 9.698241610128601 C 1.081009231393879 9.532010609977949 0.6936946049359187 9.232260295809484 0.42016173906009224 8.839312562074703 C 0.14662887318426576 8.446364828339922 -2.2117723439839454e-16 7.979070964030371 0 7.50029319534393 C -6.114900009837966e-16 7.021515426657488 0.14662887318426576 6.554222456417495 0.42016173906009224 6.161274722682714 C 0.6936946049359187 5.768326988947933 1.081009231393879 5.46857578070991 1.5300030398377678 5.302344780559257 C 1.9789968482816565 5.136113780408604 2.4681302203748854 5.111377516039016 2.931603598334188 5.231463393038971 C 3.3950769762934905 5.351549270038926 3.810656077614701 5.610696630608446 4.122436180815377 5.974044040272088 L 10.42056042272297 3.0490442959238946 C 10.348869099705993 2.820920157157169 10.312510971113596 2.583168146536531 10.312748141583695 2.344044297937898 L 10.312748141583695 2.344044297937898 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._bi_share_fill_3}>
				<View style = {stylesheet._Group_3}>
					<Svg style = {stylesheet._Vector_3} fill = {"rgba(20, 101, 136, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.312748141583695 2.344044297937898 C 10.312680114106643 1.7941373727049204 10.505974052243417 1.2617152908425129 10.858811900670036 0.8399296787918183 C 11.211649749096654 0.4181440667411237 11.701562833731595 0.1338539090725025 12.242837061777326 0.03679793675109617 C 12.784111289823057 -0.06025803557031017 13.342278851884274 0.036100684731959765 13.819683539094324 0.30901536141988933 C 14.297088226304375 0.581930038107819 14.663329519680653 1.0140216178927917 14.854330426292226 1.5296923286982402 C 15.045331332903798 2.045363039503689 15.048928985300453 2.611775382846165 14.86449420991546 3.1298308565594297 C 14.680059434530467 3.6478863302726943 14.319336478646605 4.084595695505509 13.84543721496231 4.363552969240585 C 13.371537951278015 4.642510242975661 12.814640359255531 4.74595177882363 12.272176850955725 4.655779604259797 C 11.72971334265592 4.565607429695963 11.236227779272514 4.287563259421547 10.878060325865725 3.8702939000445187 L 4.579936530992952 6.795293867910101 C 4.724724612585345 7.254142965847984 4.724724612585345 7.7464438718746536 4.579936530992952 8.205292969812536 L 10.878060325865725 11.13029249064334 C 11.256662439297582 10.68997770609903 11.785245292979459 10.405892370685743 12.36136744971422 10.333091793010112 C 12.93748960644898 10.260291215334481 13.520123719378303 10.403960132702787 13.996355275467081 10.736255472850553 C 14.47258683155586 11.06855081299832 14.808501366694506 11.565808412714647 14.938997926761667 12.131659336254073 C 15.069494486828829 12.697510259793498 14.985280112026835 13.291658820118439 14.702675652407304 13.798956904789677 C 14.420071192787773 14.306254989460914 13.959202099980061 14.69057641879425 13.409385148320059 14.877439931983128 C 12.859568196660057 15.064303445172007 12.259957768877145 15.040401305790484 11.726759504216288 14.810365939675414 C 11.19356123955543 14.580330573560344 10.76474518581461 14.160543891493695 10.523417769938954 13.632360453707207 C 10.282090354063298 13.104177015920719 10.245436865713994 12.505210873541404 10.42056042272297 11.951542765316132 L 4.122436180815377 9.02654324448533 C 3.810656077614701 9.389890654148973 3.3950769762934905 9.649037567683711 2.931603598334188 9.769123444683666 C 2.4681302203748854 9.889209321683621 1.9789968482816565 9.864472610279254 1.5300030398377678 9.698241610128601 C 1.081009231393879 9.532010609977949 0.6936946049359187 9.232260295809484 0.42016173906009224 8.839312562074703 C 0.14662887318426576 8.446364828339922 -2.2117723439839454e-16 7.979070964030371 0 7.50029319534393 C -6.114900009837966e-16 7.021515426657488 0.14662887318426576 6.554222456417495 0.42016173906009224 6.161274722682714 C 0.6936946049359187 5.768326988947933 1.081009231393879 5.46857578070991 1.5300030398377678 5.302344780559257 C 1.9789968482816565 5.136113780408604 2.4681302203748854 5.111377516039016 2.931603598334188 5.231463393038971 C 3.3950769762934905 5.351549270038926 3.810656077614701 5.610696630608446 4.122436180815377 5.974044040272088 L 10.42056042272297 3.0490442959238946 C 10.348869099705993 2.820920157157169 10.312510971113596 2.583168146536531 10.312748141583695 2.344044297937898 L 10.312748141583695 2.344044297937898 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._Rectangle_111}>
			</View>
			<View style = {stylesheet._Rectangle_112}>
			</View>
			<View style = {stylesheet._Rectangle_113}>
			</View>
			<Image style = {stylesheet._image_17} source = {{uri: imageUrl_image_17}}>
			</Image>
			<Image style = {stylesheet._image_18} source = {{uri: imageUrl_image_18}}>
			</Image>
			<Image style = {stylesheet._image_19} source = {{uri: imageUrl_image_19}}>
			</Image>
			<View style = {[stylesheet._Cephalgo_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Cephalgo_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Cephalgo
			</Text>
			</View>
			<View style = {[stylesheet._Stress_Care_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Stress_Care_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Stress Care
			</Text>
			</View>
			<View style = {[stylesheet._Rishtpusht_Immuno_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Rishtpusht_Immuno_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Rishtpusht Immuno
			</Text>
			</View>
			<Image style = {stylesheet._image_20} source = {{uri: imageUrl_image_20}}>
			</Image>
			<Image style = {stylesheet._image_21} source = {{uri: imageUrl_image_21}}>
			</Image>
			<Image style = {stylesheet._image_22} source = {{uri: imageUrl_image_22}}>
			</Image>
			<View style = {stylesheet._Line_36}>
			</View>
			<View style = {stylesheet._Line_37}>
			</View>
			<View style = {stylesheet._Line_38}>
			</View>
			<View style = {stylesheet._Line_39}>
			</View>
			<View style = {stylesheet._Line_40}>
			</View>
			<View style = {stylesheet._Line_41}>
			</View>
			<View style = {[stylesheet.___214_00_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___214_00_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				₹ 214.00
			</Text>
			</View>
			<View style = {[stylesheet.___850_00_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___850_00_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				₹ 850.00
			</Text>
			</View>
			<View style = {[stylesheet.___2500_00_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___2500_00_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				₹ 2500.00
			</Text>
			</View>
			<View style = {[stylesheet._ADD_TO_CART_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_TO_CART_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD TO CART
			</Text>
			</View>
			<View style = {[stylesheet._ADD_TO_CART_5, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_TO_CART_5, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD TO CART
			</Text>
			</View>
			<View style = {[stylesheet._ADD_TO_CART_6, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_TO_CART_6, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD TO CART
			</Text>
			</View>
			<View style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.
			</Text>
			</View>
			<View style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__5, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__5, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.
			</Text>
			</View>
			<View style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__6, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__6, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.
			</Text>
			</View>
			<View style = {[stylesheet._40_capsules_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._40_capsules_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				40 capsules
			</Text>
			</View>
			<View style = {[stylesheet._40_capsules_5, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._40_capsules_5, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				40 capsules
			</Text>
			</View>
			<View style = {[stylesheet._40_capsules_6, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._40_capsules_6, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				40 capsules
			</Text>
			</View>
			<View style = {stylesheet._bi_share_fill_4}>
				<View style = {stylesheet._Group_4}>
					<Svg style = {stylesheet._Vector_4} fill = {"rgba(20, 101, 136, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.312748141583695 2.344044297937898 C 10.312680114106643 1.7941373727049204 10.505974052243417 1.2617152908425129 10.858811900670036 0.8399296787918183 C 11.211649749096654 0.4181440667411237 11.701562833731595 0.1338539090725025 12.242837061777326 0.03679793675109617 C 12.784111289823057 -0.06025803557031017 13.342278851884274 0.036100684731959765 13.819683539094324 0.30901536141988933 C 14.297088226304375 0.581930038107819 14.663329519680653 1.0140216178927917 14.854330426292226 1.5296923286982402 C 15.045331332903798 2.045363039503689 15.048928985300453 2.611775382846165 14.86449420991546 3.1298308565594297 C 14.680059434530467 3.6478863302726943 14.319336478646605 4.084595695505509 13.84543721496231 4.363552969240585 C 13.371537951278015 4.642510242975661 12.814640359255531 4.74595177882363 12.272176850955725 4.655779604259797 C 11.72971334265592 4.565607429695963 11.236227779272514 4.287563259421547 10.878060325865725 3.8702939000445187 L 4.579936530992952 6.795293867910101 C 4.724724612585345 7.254142965847984 4.724724612585345 7.7464438718746536 4.579936530992952 8.205292969812536 L 10.878060325865725 11.13029249064334 C 11.256662439297582 10.68997770609903 11.785245292979459 10.405892370685743 12.36136744971422 10.333091793010112 C 12.93748960644898 10.260291215334481 13.520123719378303 10.403960132702787 13.996355275467081 10.736255472850553 C 14.47258683155586 11.06855081299832 14.808501366694506 11.565808412714647 14.938997926761667 12.131659336254073 C 15.069494486828829 12.697510259793498 14.985280112026835 13.291658820118439 14.702675652407304 13.798956904789677 C 14.420071192787773 14.306254989460914 13.959202099980061 14.69057641879425 13.409385148320059 14.877439931983128 C 12.859568196660057 15.064303445172007 12.259957768877145 15.040401305790484 11.726759504216288 14.810365939675414 C 11.19356123955543 14.580330573560344 10.76474518581461 14.160543891493695 10.523417769938954 13.632360453707207 C 10.282090354063298 13.104177015920719 10.245436865713994 12.505210873541404 10.42056042272297 11.951542765316132 L 4.122436180815377 9.02654324448533 C 3.810656077614701 9.389890654148973 3.3950769762934905 9.649037567683711 2.931603598334188 9.769123444683666 C 2.4681302203748854 9.889209321683621 1.9789968482816565 9.864472610279254 1.5300030398377678 9.698241610128601 C 1.081009231393879 9.532010609977949 0.6936946049359187 9.232260295809484 0.42016173906009224 8.839312562074703 C 0.14662887318426576 8.446364828339922 -2.2117723439839454e-16 7.979070964030371 0 7.50029319534393 C -6.114900009837966e-16 7.021515426657488 0.14662887318426576 6.554222456417495 0.42016173906009224 6.161274722682714 C 0.6936946049359187 5.768326988947933 1.081009231393879 5.46857578070991 1.5300030398377678 5.302344780559257 C 1.9789968482816565 5.136113780408604 2.4681302203748854 5.111377516039016 2.931603598334188 5.231463393038971 C 3.3950769762934905 5.351549270038926 3.810656077614701 5.610696630608446 4.122436180815377 5.974044040272088 L 10.42056042272297 3.0490442959238946 C 10.348869099705993 2.820920157157169 10.312510971113596 2.583168146536531 10.312748141583695 2.344044297937898 L 10.312748141583695 2.344044297937898 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._bi_share_fill_5}>
				<View style = {stylesheet._Group_5}>
					<Svg style = {stylesheet._Vector_5} fill = {"rgba(20, 101, 136, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.312748141583695 2.344044297937898 C 10.312680114106643 1.7941373727049204 10.505974052243417 1.2617152908425129 10.858811900670036 0.8399296787918183 C 11.211649749096654 0.4181440667411237 11.701562833731595 0.1338539090725025 12.242837061777326 0.03679793675109617 C 12.784111289823057 -0.06025803557031017 13.342278851884274 0.036100684731959765 13.819683539094324 0.30901536141988933 C 14.297088226304375 0.581930038107819 14.663329519680653 1.0140216178927917 14.854330426292226 1.5296923286982402 C 15.045331332903798 2.045363039503689 15.048928985300453 2.611775382846165 14.86449420991546 3.1298308565594297 C 14.680059434530467 3.6478863302726943 14.319336478646605 4.084595695505509 13.84543721496231 4.363552969240585 C 13.371537951278015 4.642510242975661 12.814640359255531 4.74595177882363 12.272176850955725 4.655779604259797 C 11.72971334265592 4.565607429695963 11.236227779272514 4.287563259421547 10.878060325865725 3.8702939000445187 L 4.579936530992952 6.795293867910101 C 4.724724612585345 7.254142965847984 4.724724612585345 7.7464438718746536 4.579936530992952 8.205292969812536 L 10.878060325865725 11.13029249064334 C 11.256662439297582 10.68997770609903 11.785245292979459 10.405892370685743 12.36136744971422 10.333091793010112 C 12.93748960644898 10.260291215334481 13.520123719378303 10.403960132702787 13.996355275467081 10.736255472850553 C 14.47258683155586 11.06855081299832 14.808501366694506 11.565808412714647 14.938997926761667 12.131659336254073 C 15.069494486828829 12.697510259793498 14.985280112026835 13.291658820118439 14.702675652407304 13.798956904789677 C 14.420071192787773 14.306254989460914 13.959202099980061 14.69057641879425 13.409385148320059 14.877439931983128 C 12.859568196660057 15.064303445172007 12.259957768877145 15.040401305790484 11.726759504216288 14.810365939675414 C 11.19356123955543 14.580330573560344 10.76474518581461 14.160543891493695 10.523417769938954 13.632360453707207 C 10.282090354063298 13.104177015920719 10.245436865713994 12.505210873541404 10.42056042272297 11.951542765316132 L 4.122436180815377 9.02654324448533 C 3.810656077614701 9.389890654148973 3.3950769762934905 9.649037567683711 2.931603598334188 9.769123444683666 C 2.4681302203748854 9.889209321683621 1.9789968482816565 9.864472610279254 1.5300030398377678 9.698241610128601 C 1.081009231393879 9.532010609977949 0.6936946049359187 9.232260295809484 0.42016173906009224 8.839312562074703 C 0.14662887318426576 8.446364828339922 -2.2117723439839454e-16 7.979070964030371 0 7.50029319534393 C -6.114900009837966e-16 7.021515426657488 0.14662887318426576 6.554222456417495 0.42016173906009224 6.161274722682714 C 0.6936946049359187 5.768326988947933 1.081009231393879 5.46857578070991 1.5300030398377678 5.302344780559257 C 1.9789968482816565 5.136113780408604 2.4681302203748854 5.111377516039016 2.931603598334188 5.231463393038971 C 3.3950769762934905 5.351549270038926 3.810656077614701 5.610696630608446 4.122436180815377 5.974044040272088 L 10.42056042272297 3.0490442959238946 C 10.348869099705993 2.820920157157169 10.312510971113596 2.583168146536531 10.312748141583695 2.344044297937898 L 10.312748141583695 2.344044297937898 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._bi_share_fill_6}>
				<View style = {stylesheet._Group_6}>
					<Svg style = {stylesheet._Vector_6} fill = {"rgba(20, 101, 136, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.312748141583695 2.344044297937898 C 10.312680114106643 1.7941373727049204 10.505974052243417 1.2617152908425129 10.858811900670036 0.8399296787918183 C 11.211649749096654 0.4181440667411237 11.701562833731595 0.1338539090725025 12.242837061777326 0.03679793675109617 C 12.784111289823057 -0.06025803557031017 13.342278851884274 0.036100684731959765 13.819683539094324 0.30901536141988933 C 14.297088226304375 0.581930038107819 14.663329519680653 1.0140216178927917 14.854330426292226 1.5296923286982402 C 15.045331332903798 2.045363039503689 15.048928985300453 2.611775382846165 14.86449420991546 3.1298308565594297 C 14.680059434530467 3.6478863302726943 14.319336478646605 4.084595695505509 13.84543721496231 4.363552969240585 C 13.371537951278015 4.642510242975661 12.814640359255531 4.74595177882363 12.272176850955725 4.655779604259797 C 11.72971334265592 4.565607429695963 11.236227779272514 4.287563259421547 10.878060325865725 3.8702939000445187 L 4.579936530992952 6.795293867910101 C 4.724724612585345 7.254142965847984 4.724724612585345 7.7464438718746536 4.579936530992952 8.205292969812536 L 10.878060325865725 11.13029249064334 C 11.256662439297582 10.68997770609903 11.785245292979459 10.405892370685743 12.36136744971422 10.333091793010112 C 12.93748960644898 10.260291215334481 13.520123719378303 10.403960132702787 13.996355275467081 10.736255472850553 C 14.47258683155586 11.06855081299832 14.808501366694506 11.565808412714647 14.938997926761667 12.131659336254073 C 15.069494486828829 12.697510259793498 14.985280112026835 13.291658820118439 14.702675652407304 13.798956904789677 C 14.420071192787773 14.306254989460914 13.959202099980061 14.69057641879425 13.409385148320059 14.877439931983128 C 12.859568196660057 15.064303445172007 12.259957768877145 15.040401305790484 11.726759504216288 14.810365939675414 C 11.19356123955543 14.580330573560344 10.76474518581461 14.160543891493695 10.523417769938954 13.632360453707207 C 10.282090354063298 13.104177015920719 10.245436865713994 12.505210873541404 10.42056042272297 11.951542765316132 L 4.122436180815377 9.02654324448533 C 3.810656077614701 9.389890654148973 3.3950769762934905 9.649037567683711 2.931603598334188 9.769123444683666 C 2.4681302203748854 9.889209321683621 1.9789968482816565 9.864472610279254 1.5300030398377678 9.698241610128601 C 1.081009231393879 9.532010609977949 0.6936946049359187 9.232260295809484 0.42016173906009224 8.839312562074703 C 0.14662887318426576 8.446364828339922 -2.2117723439839454e-16 7.979070964030371 0 7.50029319534393 C -6.114900009837966e-16 7.021515426657488 0.14662887318426576 6.554222456417495 0.42016173906009224 6.161274722682714 C 0.6936946049359187 5.768326988947933 1.081009231393879 5.46857578070991 1.5300030398377678 5.302344780559257 C 1.9789968482816565 5.136113780408604 2.4681302203748854 5.111377516039016 2.931603598334188 5.231463393038971 C 3.3950769762934905 5.351549270038926 3.810656077614701 5.610696630608446 4.122436180815377 5.974044040272088 L 10.42056042272297 3.0490442959238946 C 10.348869099705993 2.820920157157169 10.312510971113596 2.583168146536531 10.312748141583695 2.344044297937898 L 10.312748141583695 2.344044297937898 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._Rectangle_114}>
			</View>
			<View style = {stylesheet._Rectangle_117}>
			</View>
			<View style = {stylesheet._Rectangle_115}>
			</View>
			<View style = {stylesheet._Rectangle_119}>
			</View>
			<Image style = {stylesheet._image_23} source = {{uri: imageUrl_image_23}}>
			</Image>
			<Image style = {stylesheet._image_25} source = {{uri: imageUrl_image_25}}>
			</Image>
			<Image style = {stylesheet._image_24} source = {{uri: imageUrl_image_24}}>
			</Image>
			<Image style = {stylesheet._image_26} source = {{uri: imageUrl_image_26}}>
			</Image>
			<View style = {[stylesheet._JOINT_CARE, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._JOINT_CARE, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				JOINT CARE
			</Text>
			</View>
			<View style = {[stylesheet._IMMUNITY_BOOSTERS, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._IMMUNITY_BOOSTERS, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				IMMUNITY BOOSTERS
			</Text>
			</View>
			<View style = {[stylesheet._EXPLORE, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._EXPLORE, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				EXPLORE
			</Text>
			</View>
			<View style = {[stylesheet._EXPLORE_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._EXPLORE_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				EXPLORE
			</Text>
			</View>
			<Image style = {stylesheet._Rectangle_33} source = {{uri: imageUrl_Rectangle_33}}>
			</Image>
			<Image style = {stylesheet._Rectangle_118} source = {{uri: imageUrl_Rectangle_118}}>
			</Image>
			<Image style = {stylesheet._Rectangle_116} source = {{uri: imageUrl_Rectangle_116}}>
			</Image>
			<Image style = {stylesheet._Rectangle_120} source = {{uri: imageUrl_Rectangle_120}}>
			</Image>
			<View style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.
			</Text>
			</View>
			<View style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.
			</Text>
			</View>
			<View style = {[
				stylesheet._icon_navigation_chevron_right_24px,
				{
				},
			]}>
				<Svg style = {stylesheet._icon_navigation_chevron_right_24px_2} fill = {"rgba(20, 101, 136, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 0.24374999811953427 0.24480178508661782 C -0.08124999937317809 0.5698017343056143 -0.08124999937317809 1.0948016923932686 0.24374999811953427 1.4198016416122652 L 3.477083545309237 4.653134584364021 L 0.24374999811953427 7.886467626456839 C -0.08124999937317809 8.211467575675835 -0.08124999937317809 8.73646740958716 0.24374999811953427 9.061467358806157 C 0.5687499956122466 9.386467308025153 1.0937500316805249 9.386467308025153 1.4187500291732371 9.061467358806157 L 5.2437501677800595 5.236467689002799 C 5.568750165272772 4.911467739783802 5.568750165272772 4.386467905872477 5.2437501677800595 4.06146795665348 L 1.4187500291732371 0.2364684606969817 C 1.1020833573079474 -0.08019816413237865 0.5687499956122466 -0.08019816413237868 0.24374999811953427 0.24480178508661782 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<Component__icon_navigation_chevron_right_24px
				variant1_left={310}
				variant1_right={"auto"}
				variant1_top={1140}
				variant1_bottom={"auto"}
				variant1_transform={[{translateX: 0},{translateY: 0},{rotate: "0deg"},]}
			/>
			<View style = {stylesheet._Group_15}>
				<View style = {[stylesheet._KIDNEY_CARE, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._KIDNEY_CARE, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					KIDNEY CARE
				</Text>
				</View>
				<View style = {[stylesheet._EXPLORE_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._EXPLORE_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					EXPLORE
				</Text>
				</View>
				<View style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.
				</Text>
				</View>
				<Component__icon_navigation_chevron_right_24px
					variant1_left={164}
					variant1_right={"auto"}
					variant1_top={71}
					variant1_bottom={"auto"}
					variant1_transform={[{translateX: 0},{translateY: 0},{rotate: "0deg"},]}
				/>
			</View>
			<View style = {stylesheet._Group_16}>
				<View style = {[stylesheet._KIDNEY_CARE_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._KIDNEY_CARE_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					KIDNEY CARE
				</Text>
				</View>
				<View style = {[stylesheet._EXPLORE_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._EXPLORE_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					EXPLORE
				</Text>
				</View>
				<View style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.
				</Text>
				</View>
				<Component__icon_navigation_chevron_right_24px
					variant1_left={164}
					variant1_right={"auto"}
					variant1_top={71}
					variant1_bottom={"auto"}
					variant1_transform={[{translateX: 0},{translateY: 0},{rotate: "0deg"},]}
				/>
			</View>
			<View style = {stylesheet._Rectangle_121}>
			</View>
			<View style = {stylesheet._Rectangle_124}>
			</View>
			<View style = {stylesheet._bi_list_ol}>
				<View style = {stylesheet._Group_7}>
					<Svg style = {stylesheet._Vector_7} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"evenodd"} d = {"M 0 17 C 0 16.734783500432968 0.10535703599452972 16.48042882978916 0.2928934097290039 16.292892456054688 C 0.4804297834634781 16.105356082320213 0.7347835004329681 16 1 16 L 19 16 C 19.265216499567032 16 19.51957117021084 16.105356082320213 19.707107543945312 16.292892456054688 C 19.894643917679787 16.48042882978916 20 16.734783500432968 20 17 C 20 17.265216499567032 19.894643917679787 17.51957117021084 19.707107543945312 17.707107543945312 C 19.51957117021084 17.894643917679787 19.265216499567032 18 19 18 L 1 18 C 0.7347835004329681 18 0.4804297834634781 17.894643917679787 0.2928934097290039 17.707107543945312 C 0.10535703599452972 17.51957117021084 0 17.265216499567032 0 17 Z M 0 9 C 0 8.734783500432968 0.10535703599452972 8.480429783463478 0.2928934097290039 8.292893409729004 C 0.4804297834634781 8.10535703599453 0.7347835004329681 8 1 8 L 19 8 C 19.265216499567032 8 19.51957117021084 8.10535703599453 19.707107543945312 8.292893409729004 C 19.894643917679787 8.480429783463478 20 8.734783500432968 20 9 C 20 9.265216499567032 19.894643917679787 9.519570216536522 19.707107543945312 9.707106590270996 C 19.51957117021084 9.89464296400547 19.265216499567032 10 19 10 L 1 10 C 0.7347835004329681 10 0.4804297834634781 9.89464296400547 0.2928934097290039 9.707106590270996 C 0.10535703599452972 9.519570216536522 0 9.265216499567032 0 9 Z M 0 1 C 0 0.7347835004329681 0.10535703599452972 0.4804297834634781 0.2928934097290039 0.2928934097290039 C 0.4804297834634781 0.10535703599452972 0.7347835004329681 -8.881784197001252e-16 1 0 L 19 0 C 19.265216499567032 0 19.51957117021084 0.10535703599452972 19.707107543945312 0.2928934097290039 C 19.894643917679787 0.4804297834634781 20 0.7347835004329681 20 1 C 20 1.2652164995670319 19.894643917679787 1.519570216536522 19.707107543945312 1.707106590270996 C 19.51957117021084 1.8946429640054703 19.265216499567032 2 19 2 L 1 2 C 0.7347835004329681 2 0.4804297834634781 1.8946429640054703 0.2928934097290039 1.707106590270996 C 0.10535703599452972 1.519570216536522 0 1.2652164995670319 0 1 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
					<Svg style = {stylesheet._Vector_8} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 1.4260001182556152 19.061998577911993 L 1.4260001182556152 18.113996800723243 L 2 18.113996800723243 C 2.4339999854564667 18.113996800723243 2.7259998321533203 17.839997968567925 2.7259998321533203 17.479997986307122 C 2.7259998321533203 17.10999801447318 2.4100001752376556 16.85999910960968 2.004000186920166 16.85999910960968 C 1.5580001771450043 16.85999910960968 1.269999897107482 17.16399799989137 1.2579998970031738 17.479997986307122 L 0.07800006866455078 17.479997986307122 C 0.11000007018446922 16.545998054185514 0.8240002393722534 15.905997767830453 2.0500001907348633 15.905997767830453 C 3.226000189781189 15.90199776799651 3.9580002250149846 16.48799880607513 3.9640002250671387 17.31199873368294 C 3.967787916539237 17.59461746958911 3.8708570152521133 17.869357783459435 3.6905622482299805 18.087030708152845 C 3.5102674812078476 18.304703632846255 3.2583814561367035 18.451095421351717 2.9800000190734863 18.499998353278542 L 2.9800000190734863 18.565996424796502 C 3.295619696378708 18.589538163774137 3.5900183022022247 18.73383957286991 3.801969528198242 18.96888564064352 C 4.01392075419426 19.20393170841713 4.127110842615366 19.511632106414538 4.118000030517578 19.827997350060958 C 4.124000030569732 20.89399723991541 3.113999843597412 21.42799949645996 2.0159997940063477 21.42799949645996 C 0.7039997577667236 21.42799949645996 0.01600000075995922 20.687998301094648 0 19.839998386590377 L 1.1640000343322754 19.839998386590377 C 1.1800000350922346 20.195998361100997 1.5359998941421509 20.451998362580476 2.007999897003174 20.457998362098557 C 2.515999913215637 20.457998362098557 2.8560002367012203 20.167997621396363 2.8520002365112305 19.75799766146755 C 2.8480002363212407 19.36799771048733 2.5420001745224 19.061998577911993 2.0240001678466797 19.061998577911993 L 1.4240000247955322 19.061998577911993 L 1.4260001182556152 19.061998577911993 Z M 1.4179999828338623 9.663998697283471 L 0.21000003814697266 9.663998697283471 L 0.21000003814697266 9.593999008690064 C 0.21000003814697266 8.77799909658262 0.7999999523162842 7.905999433600449 2.125999927520752 7.905999433600449 C 3.291999936103821 7.905999433600449 4.046000003814697 8.557999445182864 4.046000003814697 9.417999382937682 C 4.046000003814697 10.195999310825346 3.531999856233597 10.651998406207033 3.0939998626708984 11.113998377481268 L 2.0199999809265137 12.257999282731562 L 2.0199999809265137 12.317998743333273 L 4.127999782562256 12.317998743333273 L 4.127999782562256 13.331998592039985 L 0.28600001335144043 13.331998592039985 L 0.28600001335144043 12.54199774683218 L 2.1999998092651367 10.561998380839512 C 2.475999802350998 10.277998396820587 2.7859997749328613 9.95399863332303 2.7859997749328613 9.545998677269308 C 2.7859997749328613 9.185998695008504 2.4920002222061157 8.905999344588478 2.1020002365112305 8.905999344588478 C 2.0119662284851074 8.902695208896914 1.9222087413072586 8.917859289485692 1.8382573127746582 8.950557865707685 C 1.7543058842420578 8.983256441929678 1.6779381334781647 9.032796987036654 1.6138579845428467 9.096127654080798 C 1.5497778356075287 9.15945832112494 1.4993423707783222 9.235238206883839 1.46565842628479 9.31879914304943 C 1.4319744817912579 9.402360079215022 1.4157552625983953 9.491932284832167 1.4179999828338623 9.581998925834876 L 1.4179999828338623 9.663998697283471 Z M 3.127999782562256 5.331999304135751 L 1.8580000400543213 5.331999304135751 L 1.8580000400543213 1.179999723304513 L 1.7960000038146973 1.179999723304513 L 0.5999999046325684 2.0199998011223346 L 0.5999999046325684 0.8859996007008522 L 1.8580000400543213 0 L 3.127999782562256 0 L 3.127999782562256 5.331999304135751 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {[stylesheet._My_Orders, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._My_Orders, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				My Orders
			</Text>
			</View>
			<View style = {[stylesheet._Chat, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Chat, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Chat
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_122}>
			</View>
			<View style = {stylesheet._Rectangle_125}>
			</View>
			<View style = {[stylesheet._Track_Order, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Track_Order, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Track Order
			</Text>
			</View>
			<View style = {[stylesheet._Refer_Patient, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Refer_Patient, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Refer
Patient
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_123}>
			</View>
			<View style = {stylesheet._Rectangle_126}>
			</View>
			<View style = {[stylesheet._Best_Offers, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Best_Offers, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Best Offers
			</Text>
			</View>
			<View style = {[stylesheet._Make_Payment, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Make_Payment, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Make
Payment
			</Text>
			</View>
			<View style = {stylesheet._delivery_route_track_1}>
				<Svg style = {stylesheet._Vector_9} fill = {"rgba(255, 255, 255, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 24.001122065930943 14.00198745727539 C 22.94025621218853 14.00198745727539 21.922841482916777 14.42341560125351 21.172696090173986 15.173561096191406 C 20.422550697431195 15.923706591129303 20.001122610865796 16.941121459007263 20.001122610865796 18.00198745727539 C 20.001122610865796 20.701987504959106 23.501121374088687 23.751986622810364 23.676121347267554 23.881986618041992 C 23.766687590081602 23.95945130288601 23.881945642225862 24.00201988220215 24.001122065930943 24.00201988220215 C 24.120298489636024 24.00201988220215 24.235556541780287 23.95945130288601 24.326122784594336 23.881986618041992 C 24.501122757773203 23.751986622810364 28.001121520996094 20.701987504959106 28.001121520996094 18.00198745727539 C 28.001121520996094 16.941121459007263 27.579693434430695 15.923706591129303 26.829548041687904 15.173561096191406 C 26.079402648945113 14.42341560125351 25.061987919673356 14.00198745727539 24.001122065930943 14.00198745727539 Z M 24.001122065930943 19.50198745727539 C 23.704450119767774 19.50198745727539 23.41444092890152 19.414013400673866 23.16776722951081 19.249191284179688 C 22.921093530120103 19.08436916768551 22.728835205761044 18.850100815296173 22.61530377328083 18.576011657714844 C 22.501772340800613 18.301922500133514 22.47206638826931 18.000324010849 22.529944211545423 17.709352493286133 C 22.587822034821535 17.418380975723267 22.730684059633713 17.15110681951046 22.940462801859177 16.941328048706055 C 23.15024154408464 16.73154927790165 23.4175156638857 16.588687233626842 23.708487141808433 16.53080940246582 C 23.99945861973117 16.472931571304798 24.301057067927804 16.502637527883053 24.57514618816895 16.616168975830078 C 24.849235308410098 16.729700423777103 25.083503628884184 16.921958774328232 25.248325722924033 17.16863250732422 C 25.413147816963882 17.415306240320206 25.501121861580376 17.705315470695496 25.501121861580376 18.00198745727539 C 25.501121861580376 18.399812191724777 25.34308585973184 18.781342297792435 25.061781330002713 19.062646865844727 C 24.780476800273586 19.34395143389702 24.39894674618319 19.50198745727539 24.001122065930943 19.50198745727539 Z M 13.50112349638493 5.001987457275391 L 11.501123768852354 5.001987457275391 C 11.368515537134552 5.001987457275391 11.24133821913849 5.054665498435497 11.14757004504564 5.148433685302734 C 11.05380187095279 5.2422018721699715 11.00112383696921 5.369379207491875 11.00112383696921 5.501987457275391 C 11.00112383696921 5.6345957070589066 11.05380187095279 5.76177304238081 11.14757004504564 5.855541229248047 C 11.24133821913849 5.949309416115284 11.368515537134552 6.001987457275391 11.501123768852354 6.001987457275391 L 13.50112349638493 6.001987457275391 C 13.633731728102731 6.001987457275391 13.760909046098792 5.949309416115284 13.854677220191641 5.855541229248047 C 13.94844539428449 5.76177304238081 14.001123428268071 5.6345957070589066 14.001123428268071 5.501987457275391 C 14.001123428268071 5.369379207491875 13.94844539428449 5.2422018721699715 13.854677220191641 5.148433685302734 C 13.760909046098792 5.054665498435497 13.633731728102731 5.001987457275391 13.50112349638493 5.001987457275391 Z M 17.20112375525954 12.361988067626953 C 17.249200322469207 12.369033630937338 17.298045718711222 12.369033630937338 17.346122285920888 12.361988067626953 C 18.08827904802669 12.136586159467697 18.741854528378912 11.685723543167114 19.21612287039713 11.07198715209961 C 19.256504344904172 11.02011501416564 19.286274184292747 10.960797816514969 19.303731195864266 10.897420883178711 C 19.321188207435785 10.834043949842453 19.32598977070024 10.767848894000053 19.317864647307953 10.702615737915039 C 19.309739523915667 10.637382581830025 19.28884583192917 10.574388261884451 19.25637555046023 10.517230033874512 C 19.22390526899129 10.460071805864573 19.18049539837978 10.409869238734245 19.128623263787254 10.369487762451172 C 19.07675112919473 10.329106286168098 19.017432036001978 10.29933643527329 18.954055111299795 10.281879425048828 C 18.89067818659761 10.264422414824367 18.82448313977321 10.259619889780879 18.75924999257515 10.267745018005371 C 18.69401684537709 10.275870146229863 18.631023487687653 10.296763833612204 18.57386526746459 10.32923412322998 C 18.51670704724153 10.361704412847757 18.46650352955101 10.405115239322186 18.426122062494542 10.456987380981445 C 18.078482906783126 10.906415224075317 17.59972535214827 11.236653581261635 17.05612331724982 11.401987075805664 C 16.923515085532017 11.421215271577239 16.803975893107097 11.492334440350533 16.723804102879352 11.599699020385742 C 16.643632312651608 11.707063600420952 16.60939541121949 11.841879054903984 16.628623604371537 11.9744873046875 C 16.647851797523582 12.107095554471016 16.718970956608047 12.22663476318121 16.82633552201658 12.306806564331055 C 16.933700087425116 12.3869783654809 17.068515523541738 12.421215271577239 17.20112375525954 12.401987075805664 L 17.20112375525954 12.361988067626953 Z M 9.11112375112822 13.291988372802734 C 9.204804962056189 13.385113842785358 9.331530819633066 13.437383651733398 9.463623664958869 13.437383651733398 C 9.59571651028467 13.437383651733398 9.72244236786155 13.385113842785358 9.816123578789519 13.291988372802734 C 10.223705567864544 12.887141734361649 10.748613740964176 12.621188022196293 11.316123374438948 12.531988143920898 C 11.44873160615675 12.510107783600688 11.567217428189805 12.436443693935871 11.645513855382726 12.327203750610352 C 11.723810282575647 12.217963807284832 11.755504170811319 12.082095935940742 11.73362381347195 11.949487686157227 C 11.711743456132583 11.81687943637371 11.638080330177486 11.698394551873207 11.52884040173413 11.620098114013672 C 11.419600473290773 11.541801676154137 11.28373166678228 11.510106829926372 11.151123435064479 11.531987190246582 C 10.393641307595797 11.662382677197456 9.695042004632448 12.02390867471695 9.151123707531905 12.566987991333008 C 9.099283390639485 12.610922865569592 9.056943507074951 12.664962448179722 9.026688299679517 12.725809097290039 C 8.996433092284082 12.786655746400356 8.978898078266615 12.853032760322094 8.9751546076645 12.920883178710938 C 8.971411137062384 12.988733597099781 8.981537128036887 13.056633815169334 9.004914964327908 13.120439529418945 C 9.028292800618928 13.184245243668556 9.06443135259328 13.242617208510637 9.11112375112822 13.291988372802734 Z M 11.751123734793925 18.00198745727539 C 11.2763573066295 18.00282371591311 10.80949102601895 17.88050851225853 10.396124377154216 17.646987915039062 C 10.33899937161493 17.61415744572878 10.275966466249072 17.592899387702346 10.210626164815466 17.584428787231445 C 10.14528586338186 17.575958186760545 10.07891704668987 17.58044117130339 10.01530892305268 17.597620010375977 C 9.951700799415491 17.61479884944856 9.89209944474057 17.644336376339197 9.839907259326234 17.68454933166504 C 9.787715073911897 17.72476228699088 9.743954515695336 17.774862367659807 9.711124050857668 17.831987380981445 C 9.67829358602 17.889112394303083 9.657036484563818 17.952144354581833 9.6485658852469 18.017484664916992 C 9.64009528592998 18.08282497525215 9.644577316187906 18.14919475466013 9.661756152920153 18.21280288696289 C 9.6789349896524 18.27641101926565 9.708473466193219 18.33601238206029 9.7486864160407 18.38820457458496 C 9.78889936588818 18.440396767109632 9.838999439731786 18.484156377613544 9.896124445271072 18.516986846923828 C 10.458900695735142 18.84149631857872 11.096497990941518 19.013820104068145 11.746123621034192 19.016986846923828 L 12.071123386023398 19.016986846923828 C 12.2037316177412 19.016986846923828 12.330908935737263 18.96430880576372 12.424677109830112 18.870540618896484 C 12.518445283922961 18.776772432029247 12.571123317906542 18.649595096707344 12.571123317906542 18.516986846923828 C 12.571123317906542 18.384378597140312 12.518445283922961 18.257203169167042 12.424677109830112 18.163434982299805 C 12.330908935737263 18.069666795432568 12.2037316177412 18.016986846923828 12.071123386023398 18.016986846923828 L 11.751123734793925 18.00198745727539 Z M 17.471122268891676 6.236987113952637 C 17.588043223343405 6.238465436617844 17.70178576054549 6.198919370770454 17.79256959753623 6.1252241134643555 C 17.883353434526967 6.0515288561582565 17.94543770788607 5.948345847427845 17.968026574365492 5.8336181640625 C 17.990615440844913 5.718890480697155 17.972278690913388 5.599874533712864 17.916207733768715 5.497264862060547 C 17.860136776624042 5.39465519040823 17.76987730024841 5.314943112432957 17.661122777064815 5.2719879150390625 C 17.21304000362661 5.09153588116169 16.734172269820892 4.999837307492271 16.251123121742218 5.001987457275391 L 15.501123223917503 5.001987457275391 C 15.368514992199701 5.001987457275391 15.241337674203638 5.054665498435497 15.147569500110789 5.148433685302734 C 15.05380132601794 5.2422018721699715 15.00112329203436 5.369379207491875 15.00112329203436 5.501987457275391 C 15.00112329203436 5.6345957070589066 15.05380132601794 5.76177304238081 15.147569500110789 5.855541229248047 C 15.241337674203638 5.949309416115284 15.368514992199701 6.001987457275391 15.501123223917503 6.001987457275391 L 16.251123121742218 6.001987457275391 C 16.604146453689655 6.001555062975967 16.953915610894263 6.069471091032028 17.281123668066908 6.201987266540527 C 17.34157932482314 6.225895142182708 17.406115820478554 6.237783546093851 17.471122268891676 6.236987113952637 Z M 12.716123755916263 12.00198745727539 C 12.716123755916263 12.134595707058907 12.768801789899843 12.26177304238081 12.862569963992692 12.355541229248047 C 12.956338138085542 12.449309416115284 13.083515456081605 12.50198745727539 13.216123687799406 12.50198745727539 L 15.216123415331982 12.50198745727539 C 15.348731647049783 12.50198745727539 15.475908965045845 12.449309416115284 15.569677139138694 12.355541229248047 C 15.663445313231543 12.26177304238081 15.716123347215124 12.134595707058907 15.716123347215124 12.00198745727539 C 15.716123347215124 11.869379207491875 15.663445313231543 11.742201872169971 15.569677139138694 11.648433685302734 C 15.475908965045845 11.554665498435497 15.348731647049783 11.50198745727539 15.216123415331982 11.50198745727539 L 13.216123687799406 11.50198745727539 C 13.083515456081605 11.50198745727539 12.956338138085542 11.554665498435497 12.862569963992692 11.648433685302734 C 12.768801789899843 11.742201872169971 12.716123755916263 11.869379207491875 12.716123755916263 12.00198745727539 Z M 19.501122678982654 9.396987915039062 C 19.633730910700457 9.396987915039062 19.76090822869652 9.34430892020464 19.854676402789366 9.250540733337402 C 19.948444576882213 9.156772546470165 20.001122610865796 9.029596164822578 20.001122610865796 8.896987915039062 C 20.001122610865796 8.841987915337086 20.001122610865796 8.786986999213696 20.001122610865796 8.731986999511719 C 20.002560241639973 8.012120544910431 19.795939192411378 7.307175934314728 19.406123378570268 6.701987266540527 C 19.331289608238038 6.598107159137726 19.219458748195656 6.526890829205513 19.09367682689775 6.50301456451416 C 18.96789490559984 6.479138299822807 18.837744783998858 6.504422053694725 18.730050396333393 6.5736541748046875 C 18.62235600866793 6.64288629591465 18.54532186425571 6.75079121440649 18.51482329857939 6.875133514404297 C 18.484324732903072 6.999475814402103 18.502686878135094 7.130780279636383 18.566123340418716 7.241987228393555 C 18.85357054518762 7.6891994178295135 19.00471084331502 8.210374772548676 19.001122747099508 8.741987228393555 C 19.001122747099505 8.781987227499485 19.001122747099508 8.821987226605415 19.001122747099508 8.866987228393555 C 19.001122747099508 8.99959547817707 19.05380078108309 9.126772813498974 19.147568955175938 9.220541000366211 C 19.241337129268786 9.314309187233448 19.36851444726485 9.366987228393555 19.501122678982654 9.366987228393555 L 19.501122678982654 9.396987915039062 Z M 8.636124388043745 14.191987991333008 C 8.571445526713681 14.180468463338912 8.505130078523237 14.181807970628142 8.440969270892662 14.195930480957031 C 8.376808463262087 14.21005299128592 8.316059831090246 14.236681673675776 8.26219541524281 14.274293899536133 C 8.208330999395372 14.31190612539649 8.162407232452418 14.359764724969864 8.127048338927837 14.41513442993164 C 8.091689445403256 14.470504134893417 8.06758908915728 14.532298132777214 8.056124543353235 14.596986770629883 C 7.922272705595099 15.359990000724792 8.027034470631332 16.14570903778076 8.35612373954377 16.846986770629883 C 8.383238967229628 16.907650765031576 8.422174897049997 16.962302327156067 8.47065428729534 17.00774574279785 C 8.519133677540681 17.053189158439636 8.576184810583413 17.08851339109242 8.638473287565056 17.11165428161621 C 8.700761764546698 17.134795172140002 8.767037672511302 17.14528884133324 8.833428133136977 17.142520904541016 C 8.899818593762651 17.13975296774879 8.9649915365524 17.123778777197003 9.025137625452295 17.09553337097168 C 9.08528371435219 17.067287964746356 9.139196570142776 17.027336981147528 9.183725059596847 16.978015899658203 C 9.228253549050919 16.92869481816888 9.262504442671492 16.870993360877037 9.284475969027914 16.80828285217285 C 9.306447495384337 16.745572343468666 9.315698565729859 16.679110497236252 9.311689061939225 16.612783432006836 C 9.30767955814859 16.54645636677742 9.290489991184762 16.481594681739807 9.261124302897676 16.421987533569336 C 9.020358585289914 15.907551050186157 8.943556215369973 15.331535577774048 9.04112406584032 14.771987915039062 C 9.052643592265069 14.707309044897556 9.051304085158325 14.640992633998394 9.037181576753397 14.576831817626953 C 9.02305906834847 14.512671001255512 8.99643038958634 14.451922360807657 8.958818168850035 14.39805793762207 C 8.92120594811373 14.344193514436483 8.87334735506031 14.298269741237164 8.817977657641755 14.262910842895508 C 8.7626079602232 14.227551944553852 8.700813017083641 14.203452538698912 8.636124388043745 14.191987991333008 Z M 16.071122841088545 18.00198745727539 L 14.071123113555972 18.00198745727539 C 13.93851488183817 18.00198745727539 13.811338517516296 18.054665498435497 13.717570343423446 18.148433685302734 C 13.623802169330597 18.24220187216997 13.57112318167283 18.369379207491875 13.57112318167283 18.50198745727539 C 13.57112318167283 18.634595707058907 13.623802169330597 18.76177304238081 13.717570343423446 18.855541229248047 C 13.811338517516296 18.949309416115284 13.93851488183817 19.00198745727539 14.071123113555972 19.00198745727539 L 16.071122841088545 19.00198745727539 C 16.20373107280635 19.00198745727539 16.330908390802414 18.949309416115284 16.42467656489526 18.855541229248047 C 16.51844473898811 18.76177304238081 16.57112277297169 18.634595707058907 16.57112277297169 18.50198745727539 C 16.57112277297169 18.369379207491875 16.51844473898811 18.24220187216997 16.42467656489526 18.148433685302734 C 16.330908390802414 18.054665498435497 16.20373107280635 18.00198745727539 16.071122841088545 18.00198745727539 Z M 5.001124177534393 4.931987762451172 L 9.50112404131978 2.4319870471954346 L 5.246124029716231 0.06698727607727051 C 5.170114438716703 0.02310311049222946 5.083892382987736 0 4.99612406377466 0 C 4.908355744561584 0 4.822133688832617 0.02310311049222946 4.746124097833088 0.06698727607727051 L 0.501124969400011 2.4319870471954346 L 5.001124177534393 4.931987762451172 Z M 5.501124109417537 10.796987533569336 L 9.746123893501618 8.441987037658691 C 9.763680480206604 8.429805832915008 9.780386091514062 8.416441531851888 9.79612407742477 8.401987075805664 C 9.825202393132091 8.381562793627381 9.852020502880093 8.35809718258679 9.876123990232138 8.331987380981445 C 9.914101643270484 8.282662995159626 9.945998425689332 8.228942696005106 9.971124244318707 8.171987533569336 C 9.974465952428584 8.138737954199314 9.974465952428584 8.105236731469631 9.971124244318707 8.07198715209961 C 9.98300133150817 8.04950375854969 9.993033991400557 8.026093896478415 10.001123973202922 8.00198745727539 L 10.001123973202922 3.296987295150757 L 5.501124109417537 5.796987533569336 L 5.501124109417537 10.796987533569336 Z M 0.03612509622762553 8.166987419128418 C 0.061207373669924445 8.223965000361204 0.09310693888024471 8.277690377086401 0.131125119346228 8.326987266540527 C 0.15522860669827265 8.353097068145871 0.18204671644627365 8.37656363286078 0.21112503215359604 8.396987915039062 C 0.22686301806430384 8.411442371085286 0.24356837605205667 8.424806672148407 0.26112496275704195 8.43698787689209 L 4.50112424565125 10.796987533569336 L 4.50112424565125 5.796987533569336 L 0.001125016562112365 3.296987295150757 L 0.001125016562112365 8.00198745727539 C -0.0003750054818990199 8.02362816222012 -0.0003750054818990199 8.045346332713962 0.001125016562112365 8.066987037658691 C 0.009217187903552398 8.101465851068497 0.020949786468845114 8.134987704455853 0.03612509622762553 8.166987419128418 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<View style = {stylesheet._tabler_discount_2}>
				<View style = {stylesheet._Group_8}>
					<Svg style = {stylesheet._Vector_10} fill = {"rgba(0,0,0,0)"}>
					<Path fillRule = {"nonzero"} d = {"M 0 8 L 8 0"}   strokeLinecap = {"round"}  strokeLinejoin = {"round"}  strokeWidth = {2}  stroke = {"rgba(255, 255, 255, 1)"}/>
					</Svg>
					<Svg style = {stylesheet._Vector_11} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"none"} d = {"M 1.3333320617675781 0.6666660308837891 C 1.3333320617675781 1.034855531193557 1.034855531193557 1.3333320617675781 0.6666660308837891 1.3333320617675781 C 0.2984765305740211 1.3333320617675781 0 1.034855531193557 0 0.6666660308837891 C 0 0.2984765305740211 0.2984765305740211 0 0.6666660308837891 0 C 1.034855531193557 0 1.3333320617675781 0.2984765305740211 1.3333320617675781 0.6666660308837891 Z"}   strokeLinecap = {"round"}  strokeLinejoin = {"round"}  strokeWidth = {2}  stroke = {"rgba(255, 255, 255, 1)"}/>
					</Svg>
					<Svg style = {stylesheet._Vector_12} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"none"} d = {"M 1.333333969116211 0.6666669845581055 C 1.333333969116211 1.0348570115676807 1.0348570115676807 1.333333969116211 0.6666669845581055 1.333333969116211 C 0.2984769575485302 1.333333969116211 0 1.0348570115676807 0 0.6666669845581055 C 0 0.2984769575485302 0.2984769575485302 0 0.6666669845581055 0 C 1.0348570115676807 0 1.333333969116211 0.2984769575485302 1.333333969116211 0.6666669845581055 Z"}   strokeLinecap = {"round"}  strokeLinejoin = {"round"}  strokeWidth = {2}  stroke = {"rgba(255, 255, 255, 1)"}/>
					</Svg>
					<Svg style = {stylesheet._Vector_13} fill = {"rgba(0,0,0,0)"}>
					<Path fillRule = {"nonzero"} d = {"M 2.6516563281998713 5.584989251784767 C 2.6516563281998713 4.807020886331527 2.9607033352789855 4.060916725186021 3.5108100302325034 3.5108100302325034 C 4.060916725186021 2.9607033352789855 4.807020886331527 2.6516563281998726 5.584989251784767 2.6516563281998713 L 6.91832251446569 2.6516563281998713 C 7.69285415575615 2.651213466411149 8.435776025085724 2.3444588928865597 8.98498932593426 1.7983232181032762 L 9.91832235549777 0.864989870648345 C 10.190919157274926 0.5908567989699385 10.515016475439825 0.37331250318608455 10.871978183667006 0.22486621936704632 C 11.228939891894186 0.07641993554800808 11.61172550978406 1.184237830181555e-15 11.998323440551758 0 C 12.384921371319455 1.184237830181555e-15 12.767704446077955 0.07641993554800808 13.124666154305135 0.22486621936704632 C 13.481627862532315 0.37331250318608455 13.805725816480058 0.5908567989699385 14.078322618257214 0.864989870648345 L 15.011656919386411 1.7983232181032762 C 15.560870220234946 2.3444588928865597 16.303790817998834 2.651213466411149 17.078322459289293 2.6516563281998713 L 18.411655721970217 2.6516563281998713 C 19.189624087423457 2.6516563281998726 19.93572952013465 2.9607033352789855 20.485836215088167 3.5108100302325034 C 21.035942910041683 4.060916725186021 21.3449899171208 4.807020886331527 21.3449899171208 5.584989251784767 L 21.3449899171208 6.91832251446569 C 21.345432778909522 7.69285415575615 21.65218671665127 8.435776025085724 22.19832239143455 8.98498932593426 L 23.131656692563748 9.91832235549777 C 23.405789764242154 10.190919157274926 23.623331834786054 10.515016475439825 23.77177811860509 10.871978183667006 C 23.92022440242413 11.228939891894186 23.996646881103516 11.61172550978406 23.996646881103516 11.998323440551758 C 23.996646881103516 12.384921371319455 23.92022440242413 12.767704446077955 23.77177811860509 13.124666154305135 C 23.623331834786054 13.481627862532315 23.405789764242154 13.805725816480058 23.131656692563748 14.078322618257214 L 22.19832239143455 15.011656919386411 C 21.65218671665127 15.560870220234946 21.345432778909522 16.303790817998834 21.3449899171208 17.078322459289293 L 21.3449899171208 18.411655721970217 C 21.3449899171208 19.189624087423457 21.035942910041683 19.93572952013465 20.485836215088167 20.485836215088167 C 19.93572952013465 21.035942910041683 19.189624087423457 21.3449899171208 18.411655721970217 21.3449899171208 L 17.078322459289293 21.3449899171208 C 16.303790817998834 21.345432778909522 15.560870220234946 21.65218671665127 15.011656919386411 22.19832239143455 L 14.078322618257214 23.131656692563748 C 13.805725816480058 23.405789764242154 13.481627862532315 23.623331834786054 13.124666154305135 23.77177811860509 C 12.767704446077955 23.92022440242413 12.384921371319455 23.996646881103516 11.998323440551758 23.996646881103516 C 11.61172550978406 23.996646881103516 11.228939891894186 23.92022440242413 10.871978183667006 23.77177811860509 C 10.515016475439825 23.623331834786054 10.190919157274926 23.405789764242154 9.91832235549777 23.131656692563748 L 8.98498932593426 22.19832239143455 C 8.435776025085724 21.65218671665127 7.69285415575615 21.345432778909522 6.91832251446569 21.3449899171208 L 5.584989251784767 21.3449899171208 C 4.807020886331527 21.3449899171208 4.060916725186021 21.035942910041683 3.5108100302325034 20.485836215088167 C 2.9607033352789855 19.93572952013465 2.6516563281998726 19.189624087423457 2.6516563281998713 18.411655721970217 L 2.6516563281998713 17.078322459289293 C 2.651213466411149 16.303790817998834 2.3444588928865597 15.560870220234946 1.7983232181032762 15.011656919386411 L 0.864989870648345 14.078322618257214 C 0.5908567989699385 13.805725816480058 0.37331250318608455 13.481627862532315 0.22486621936704632 13.124666154305135 C 0.07641993554800808 12.767704446077955 0 12.384921371319455 0 11.998323440551758 C 5.921189150907775e-16 11.61172550978406 0.07641993554800808 11.228939891894186 0.22486621936704632 10.871978183667006 C 0.37331250318608455 10.515016475439825 0.5908567989699385 10.190919157274926 0.864989870648345 9.91832235549777 L 1.7983232181032762 8.98498932593426 C 2.3444588928865597 8.435776025085724 2.651213466411149 7.69285415575615 2.6516563281998713 6.91832251446569 L 2.6516563281998713 5.584989251784767 Z"}   strokeLinecap = {"round"}  strokeLinejoin = {"round"}  strokeWidth = {2}  stroke = {"rgba(255, 255, 255, 1)"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._fluent_chat_multiple_20_regular}>
				<View style = {stylesheet._Group_9}>
					<Svg style = {stylesheet._Vector_14} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 10.457510079536233 3.2833323354260175e-8 C 8.644026188213715 -0.00014404859711293936 6.862025280931121 0.4739151814387311 5.288329169622925 1.3751388142808068 C 3.7146330583147287 2.2763624471228825 2.4039470791309987 3.573421658612054 1.4863266654246479 5.137613525921769 C 0.5687062517182971 6.701805393231485 0.07605000030499427 8.47875360190055 0.05724224107509537 10.292139893139847 C 0.03843448184519646 12.105526184379144 0.4941291075833796 13.89231173406565 1.3791092534152234 15.475199432120858 L 0.10550922626046413 18.806398979524218 C -0.00036442281441327606 19.083311541328197 -0.027220801733282455 19.384194181844734 0.0279365939443209 19.675480069524884 C 0.08309398962192426 19.966765957205034 0.21809592027820587 20.23700070090831 0.4178810782878657 20.456034245641753 C 0.6176662362975255 20.675067790375195 0.8743774565695007 20.834286818188843 1.1593761961277986 20.91592955673737 C 1.4443749356860964 20.9975722952859 1.746452862445794 20.99842780072704 2.0319092703289514 20.918399954613474 L 6.011109048056823 19.803199181955748 C 7.420629737002254 20.469188322782344 8.961841887663374 20.809780656062095 10.520748607747866 20.799784235467865 C 12.079655327832358 20.789787814873634 13.61637004558411 20.429458299620453 15.017233946271057 19.745447718821254 C 16.418097846958002 19.061437138022054 17.647267461268797 18.071245898407618 18.613826819113832 16.8481135150222 C 19.580386176958868 15.62498113163678 20.25960590616413 14.200203379921316 20.60124756206757 12.679160696515188 C 20.94288921797101 11.15811801310906 20.938212494282165 9.579727747629484 20.587561953546913 8.06073660835209 C 20.23691141281166 6.541745469074698 19.54925939029201 5.121017590591421 18.575467747578454 3.9036352909591594 C 17.601676104864897 2.686252991326897 16.36665998989657 1.703363940369627 14.961766719675627 1.0276679688519295 C 13.556873449454686 0.3519719973342319 12.018047773509398 0.000756983720191892 10.459109200701318 3.2833323354260175e-8 L 10.457510079536233 3.2833323354260175e-8 Z M 1.6575093055072243 10.39999969219364 C 1.6582211104933122 8.48228696513826 2.2853565281864956 6.617298407207227 3.443497239182276 5.088791505882368 C 4.601637950178056 3.5602846045575083 6.227382746974596 2.4519357909255026 8.073374536170599 1.9323806190773136 C 9.919366325366601 1.4128254472291248 11.884547573004527 1.5105060607168785 13.669917907164724 2.2105605424847123 C 15.45528824132492 2.910615024252546 16.963108533349246 4.174719305457922 17.963964119225665 5.810540599511163 C 18.964819705102084 7.446361893564404 19.40391979945797 9.364349660284496 19.214455508016655 11.272680330427615 C 19.02499121657534 13.181011000570734 18.217334320195008 14.975215182544996 16.914369956193376 16.382306949218723 C 15.611405592191746 17.78939871589245 13.884464692553312 18.732347124721286 11.996297989976906 19.06768284630278 C 10.1081312874005 19.403018567884274 8.162105542936418 19.112383753640668 6.454309369951572 18.239998849803456 L 6.1759093178595705 18.09600013580363 L 1.5999092815754399 19.377599524141967 L 3.1503091310106726 15.319999241401781 L 2.9455090883054105 14.98399919031114 C 2.100940225861967 13.604328897282615 1.6551185455897697 12.01764643386731 1.6575093055072243 10.39999969219364 L 1.6575093055072243 10.39999969219364 Z M 15.198310004153369 25.599999242322806 C 13.701235333335934 25.601656648514453 12.221531364129568 25.279335322827826 10.860780056021799 24.655162844505657 C 9.50002874791403 24.030990366183488 8.290458667558607 23.119749624720654 7.31510957924945 21.983998983133784 C 8.215909656817278 22.22879897131086 9.159909275496767 22.369598921677213 10.131109308139882 22.39519892213547 C 11.61276001281517 23.44170558214126 13.382747102728342 24.002444142307592 15.196709357109308 23.999999289677632 C 16.639909437510756 23.999999289677632 17.999909250223673 23.65279866785831 19.19990930375448 23.03999870773898 L 19.47830897437674 22.8959984678603 L 24.054308629191127 24.177599382077492 L 22.503908779755893 20.119999099337306 L 22.7087092039309 19.783999048246667 C 23.52470922507306 18.4495991014735 23.99670974966857 16.881599498833367 23.99670974966857 15.199999550129165 C 23.99919019949299 13.423282798209842 23.461253545209896 11.68782762267551 22.454308557816717 10.224000246719061 C 22.441152438240845 9.272159301990085 22.314934724618794 8.325253049497869 22.078309090360158 7.40319954895564 C 23.185336002841673 8.377982845300519 24.07177102659181 9.57762546802862 24.678481630667676 10.92210050681927 C 25.28519223474354 12.26657554560992 25.59822966793385 13.724971174290607 25.596709821042985 15.199999550129165 C 25.596709821042985 17.041599532244856 25.11670854078051 18.7727993177379 24.276708541455918 20.275199290056385 L 25.54870872026889 23.606398837459743 C 25.654582369343768 23.88331139926372 25.681440277121844 24.18419556565912 25.62628288144424 24.47548145333927 C 25.571125485766636 24.76676734101942 25.43612203817208 25.036999032964978 25.23633688016242 25.25603257769842 C 25.03655172215276 25.475066122431862 24.77984083566681 25.63428667612437 24.494842096108513 25.715929414672896 C 24.209843356550216 25.797572153221424 23.907767337139234 25.798426132783707 23.622310929256077 25.71839828667014 L 19.643110007118974 24.603200565770134 C 18.29430995534268 25.243200556364947 16.785508809240174 25.599999242322806 15.195108710065249 25.599999242322806 L 15.198310004153369 25.599999242322806 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<Image style = {stylesheet._refer_1} source = {{uri: imageUrl_refer_1}}>
			</Image>
			<View style = {stylesheet._fluent_payment_16_regular}>
				<View style = {stylesheet._Group_10}>
					<Svg style = {stylesheet._Vector_15} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 1 0 C 0.7347835004329681 0 0.4804288297891617 0.10535608232021332 0.2928924560546875 0.2928924560546875 C 0.10535608232021332 0.4804288297891617 0 0.7347835004329681 0 1 C 0 1.2652164995670319 0.10535608232021332 1.5195711702108383 0.2928924560546875 1.7071075439453125 C 0.4804288297891617 1.8946439176797867 0.7347835004329681 2 1 2 L 5 2 C 5.265216499567032 2 5.519571170210838 1.8946439176797867 5.7071075439453125 1.7071075439453125 C 5.894643917679787 1.5195711702108383 6 1.2652164995670319 6 1 C 6 0.7347835004329681 5.894643917679787 0.4804288297891617 5.7071075439453125 0.2928924560546875 C 5.519571170210838 0.10535608232021332 5.265216499567032 0 5 0 L 1 0 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
					<Svg style = {stylesheet._Vector_16} fill = {"rgba(255, 255, 255, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 0 4 C 0 2.9391340017318726 0.4214274287223816 1.921718180179596 1.1715729236602783 1.1715726852416992 C 1.921718418598175 0.4214271903038025 2.9391340017318726 8.881784197001252e-16 4 0 L 24 0 C 25.060865998268127 8.881784197001252e-16 26.078280866146088 0.4214271903038025 26.828426361083984 1.1715726852416992 C 27.57857185602188 1.921718180179596 28 2.9391340017318726 28 4 L 28 16 C 28 17.060865998268127 27.57857185602188 18.078280866146088 26.828426361083984 18.828426361083984 C 26.078280866146088 19.57857185602188 25.060865998268127 20 24 20 L 4 20 C 2.9391340017318726 20 1.921718418598175 19.57857185602188 1.1715729236602783 18.828426361083984 C 0.4214274287223816 18.078280866146088 4.440892098500626e-16 17.060865998268127 0 16 L 0 4 Z M 26 4 C 26 3.4695670008659363 25.78928592801094 2.960859566926956 25.414213180541992 2.585786819458008 C 25.039140433073044 2.2107140719890594 24.530432999134064 2.000000000000001 24 2 L 4 2 C 3.4695670008659363 2 2.960859090089798 2.2107140719890594 2.5857863426208496 2.585786819458008 C 2.2107135951519012 2.960859566926956 2.0000000000000018 3.4695670008659363 2 4 L 2 6 L 26 6 L 26 4 Z M 2 16 C 2.000000000000001 16.530432999134064 2.2107135951519012 17.039140433073044 2.5857863426208496 17.414213180541992 C 2.960859090089798 17.78928592801094 3.4695670008659363 18 4 18 L 24 18 C 24.530432999134064 18 25.039140433073044 17.78928592801094 25.414213180541992 17.414213180541992 C 25.78928592801094 17.039140433073044 26 16.530432999134064 26 16 L 26 8 L 2 8 L 2 16 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._Frame_3}>
				<Image style = {stylesheet._Rectangle_65} source = {{uri: imageUrl_Rectangle_65}}>
				</Image>
				<Image style = {stylesheet._Rectangle_63} source = {{uri: imageUrl_Rectangle_63}}>
				</Image>
				<Image style = {stylesheet._Rectangle_64} source = {{uri: imageUrl_Rectangle_64}}>
				</Image>
			</View>
			<View style = {stylesheet._Ellipse_6}>
			</View>
			<View style = {stylesheet._ion_bag_handle}>
				<Svg style = {stylesheet._Vector_17} fill = {"rgba(255, 255, 255, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 23.82714866252164 8.050780892372131 C 23.653362734291846 7.8757536225020885 23.446575003324686 7.736948551610112 23.218764634468755 7.642404735088348 C 22.990954265612825 7.547860918566585 22.74664970789583 7.499457924368471 22.50000055019652 7.5 L 18.7500004584971 7.5 L 18.7500004584971 6.5625 C 18.7500004584971 4.822016805410385 18.05859580091547 3.152819126844406 16.827888304218433 1.9221116602420807 C 15.597180807521399 0.6914041936397552 13.927983535173077 6.245004513516506e-16 12.187500298023116 0 C 10.447017060873154 8.326672684688674e-16 8.777819788524832 0.6914041936397552 7.547112291827798 1.9221116602420807 C 6.3164047951307625 3.152819126844406 5.625000137549132 4.822016805410385 5.62500013754913 6.5625 L 5.62500013754913 7.5 L 1.87500004584971 7.5 C 1.3777190970014257 7.5 0.9008054189867409 7.697544442489743 0.5491747096361135 8.049175143241882 C 0.19754400028548602 8.400805843994021 4.1633364441511445e-16 8.877719063311815 0 9.375 L 0 22.03125 C 0 24.31640625 1.933593797282514 26.25 4.218750103161848 26.25 L 20.156250492884382 26.25 C 21.261610647899428 26.25034732088352 22.323230734213887 25.818171333521605 23.11406370894248 25.045899152755737 C 23.512045226378056 24.666223945096135 23.828961277066487 24.209838453680277 24.045680753284145 23.704293966293335 C 24.262400229501804 23.198749478906393 24.374427581737432 22.654530555009842 24.37500059604623 22.1044921875 L 24.37500059604623 9.375 C 24.37576513215419 9.129015700891614 24.32773822104449 8.885322245769203 24.2337000335471 8.65802139043808 C 24.139661846049705 8.430720535106957 24.001479316682037 8.224325375631452 23.82714866252164 8.050780892372131 L 23.82714866252164 8.050780892372131 Z M 7.50000018339884 6.5625 C 7.500000183398842 5.319297686219215 7.993860365720462 4.127013757824898 8.872937181006547 3.247936964035034 C 9.752013996292632 2.3688601702451706 10.944297953842083 1.8750000000000009 12.187500298023116 1.875 C 13.430702642204148 1.875 14.622986599753597 2.3688601702451706 15.502063415039682 3.247936964035034 C 16.38114023032577 4.127013757824898 16.875000412647392 5.319297686219215 16.875000412647392 6.5625 L 16.875000412647392 7.5 L 7.50000018339884 7.5 L 7.50000018339884 6.5625 Z M 18.7500004584971 12.1875 C 18.7500004584971 13.927983194589615 18.05859580091547 15.597180426120758 16.827888304218433 16.827887892723083 C 15.597180807521399 18.05859535932541 13.927983535173077 18.75 12.187500298023116 18.75 C 10.447017060873154 18.75 8.777819788524832 18.05859535932541 7.547112291827798 16.827887892723083 C 6.3164047951307625 15.597180426120758 5.62500013754913 13.927983194589615 5.62500013754913 12.1875 L 5.62500013754913 11.25 C 5.62500013754913 11.001359531655908 5.7237723612092966 10.76290292199701 5.899587715884611 10.587087571620941 C 6.075403070559925 10.411272221244872 6.3138596860498435 10.3125 6.562500160473985 10.3125 C 6.811140634898127 10.3125 7.049597250388046 10.411272221244872 7.22541260506336 10.587087571620941 C 7.401227959738674 10.76290292199701 7.50000018339884 11.001359531655908 7.50000018339884 11.25 L 7.50000018339884 12.1875 C 7.500000183398842 13.430702313780785 7.993860365720462 14.622986242175102 8.872937181006547 15.502063035964966 C 9.752013996292632 16.38113982975483 10.944297953842083 16.875 12.187500298023116 16.875 C 13.430702642204148 16.875 14.622986599753597 16.38113982975483 15.502063415039682 15.502063035964966 C 16.38114023032577 14.622986242175102 16.875000412647392 13.430702313780785 16.875000412647392 12.1875 L 16.875000412647392 11.25 C 16.875000412647392 11.001359531655908 16.97377174223786 10.76290292199701 17.149587096913177 10.587087571620941 C 17.32540245158849 10.411272221244872 17.563859961148104 10.3125 17.812500435572247 10.3125 C 18.06114090999639 10.3125 18.299598419556 10.411272221244872 18.475413774231313 10.587087571620941 C 18.65122912890663 10.76290292199701 18.7500004584971 11.001359531655908 18.7500004584971 11.25 L 18.7500004584971 12.1875 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<View style = {stylesheet._status_bar}>
				<View style = {stylesheet._Rectangle_29}>
				</View>
				<View style = {[stylesheet._9_41, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._9_41, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					9:41
				</Text>
				</View>
				<View style = {stylesheet._Group_2}>
					<View style = {stylesheet._signal_1}>
						<View style = {stylesheet._Group_11}>
							<Svg style = {stylesheet._Vector_18} fill = {"rgba(56, 56, 56, 1)"}>
							<Path fillRule = {"nonzero"} d = {"M 2.187497615814209 8.166666030883789 L 0.4374995231628418 8.166666030883789 C 0.19599978373448343 8.166666030883789 0 7.97066604878505 0 7.729166064943586 L 0 0.43749996594020296 C 0 0.19599998209873853 0.19599978373448343 0 0.4374995231628418 0 L 2.187497615814209 0 C 2.428997355242567 0 2.624997138977051 0.19599998209873853 2.624997138977051 0.43749996594020296 L 2.624997138977051 7.729166064943586 C 2.624997138977051 7.97066604878505 2.428997355242567 8.166666030883789 2.187497615814209 8.166666030883789 Z"}   strokeLinejoin = {"miter"}/>
							</Svg>
						</View>
						<View style = {stylesheet._Group_12}>
							<Svg style = {stylesheet._Vector_19} fill = {"rgba(56, 56, 56, 1)"}>
							<Path fillRule = {"nonzero"} d = {"M 2.1874996026357016 7.000003814697266 L 0.4374999205271403 7.000003814697266 C 0.19599996175368675 7.000003814697266 0 6.8040037105282165 0 6.5625035762786865 L 0 0.4375002384185791 C 0 0.19600010416904942 0.19599996175368675 0 0.4374999205271403 0 L 2.1874996026357016 0 C 2.4289995614091553 0 2.624999523162842 0.19600010416904942 2.624999523162842 0.4375002384185791 L 2.624999523162842 6.5625035762786865 C 2.624999523162842 6.8040037105282165 2.4289995614091553 7.000003814697266 2.1874996026357016 7.000003814697266 Z"}   strokeLinejoin = {"miter"}/>
							</Svg>
						</View>
						<View style = {stylesheet._Group_13}>
							<Svg style = {stylesheet._Vector_20} fill = {"rgba(56, 56, 56, 1)"}>
							<Path fillRule = {"nonzero"} d = {"M 2.1874974171320596 5.250105857849121 L 0.437499483426412 5.250105857849121 C 0.19599976593256313 5.250105857849121 0 5.05410190846528 0 4.812597036361694 L 0 0.43750882148742676 C 0 0.19600394938384133 0.19599976593256313 0 0.437499483426412 0 L 2.1874974171320596 0 C 2.4289971346259085 0 2.6249969005584717 0.19600394938384133 2.6249969005584717 0.43750882148742676 L 2.6249969005584717 4.812597036361694 C 2.6249969005584717 5.05410190846528 2.4289971346259085 5.250105857849121 2.1874974171320596 5.250105857849121 Z"}   strokeLinejoin = {"miter"}/>
							</Svg>
						</View>
						<View style = {stylesheet._Group_14}>
							<Svg style = {stylesheet._Vector_21} fill = {"rgba(56, 56, 56, 1)"}>
							<Path fillRule = {"nonzero"} d = {"M 2.1874916553497314 3.499897003173828 L 0.4374983310699463 3.499897003173828 C 0.19599924967687343 3.499897003173828 0 3.3039027736384887 0 3.0624098777770996 L 0 0.4374871253967285 C 0 0.19599422953533954 0.19599924967687343 0 0.4374983310699463 0 L 2.1874916553497314 0 C 2.4289907367428043 0 2.6249899864196777 0.19599422953533954 2.6249899864196777 0.4374871253967285 L 2.6249899864196777 3.0624098777770996 C 2.6249899864196777 3.3039027736384887 2.4289907367428043 3.499897003173828 2.1874916553497314 3.499897003173828 Z"}   strokeLinejoin = {"miter"}/>
							</Svg>
						</View>
					</View>
					<View style = {stylesheet._wifi_1}>
						<Svg style = {stylesheet._Vector_22} fill = {"rgba(56, 56, 56, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 1.23046875 0 C 0.5518951416015625 0 0 0.552001953125 0 1.23046875 C 0 1.9090423583984375 0.5518951416015625 2.4609375 1.23046875 2.4609375 C 1.908935546875 2.4609375 2.4609375 1.9090423583984375 2.4609375 1.23046875 C 2.4609375 0.552001953125 1.908935546875 0 1.23046875 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {stylesheet._Vector_23} fill = {"rgba(56, 56, 56, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 7.000005006790161 0 C 4.468571901321411 0 2.1216021794825792 0.8255462518155128 0.15488159842789173 2.386810265631964 C -0.022959575057029724 2.528549168068744 -0.05126464180648327 2.7866057786052822 0.08876527845859528 2.963272048663187 L 0.6599933058023453 3.6824340247886687 C 0.8019458074122667 3.8611296876833077 1.0578662436455488 3.8839873533436156 1.2361346632242203 3.7416076078532043 C 2.8828479200601578 2.4268645862983913 4.934056520462036 1.6358184560168947 7.205083131790161 1.6358184560168947 C 9.365880250930786 1.6358184560168947 11.334843873977661 2.3488921754010796 12.935734987258911 3.5499877377850155 C 13.11336256377399 3.683288516962886 13.364796863868833 3.6510314634632213 13.503010988235474 3.4771422799330063 L 13.911137819290161 2.963272048663187 C 14.05148814804852 2.786498967083505 14.022755835205317 2.528442356546967 13.845128297805786 2.386810265631964 C 11.878407716751099 0.8255462518155128 9.531438112258911 0 7.000005006790161 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {stylesheet._Vector_24} fill = {"rgba(56, 56, 56, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 4.994425594533662 0 C 3.2100338812354736 0 1.5341623830331876 0.5827645830437267 0.14807048410641943 1.6857020985330085 C -0.025284476297280645 1.8237028025822193 -0.04846253657824712 2.0827211649391275 0.08932419228164806 2.2562901488665106 L 0.6594835875094166 2.9740647086271124 C 0.8033585547170158 3.155217335614312 1.0625899030946022 3.1748706736168395 1.243208040590621 3.0303544694892905 C 2.329693884459241 2.1612277443744072 3.7029686206626935 1.6369959676921106 5.199503535963838 1.6369959676921106 C 6.591256440565502 1.6369959676921106 7.879936317312937 2.086673184446892 8.928076858591227 2.8481337255976853 C 9.105597438603219 2.977162247649889 9.353506801708022 2.9436233898900874 9.490118591823302 2.7716565552422403 L 9.89941998326103 2.2562901488665106 C 10.039663414076488 2.0795167881488377 10.011037925341515 1.8214597440444311 9.833303709435363 1.6798274555587773 C 8.44870717049819 0.5807351609253559 6.775612964997004 0 4.994425594533662 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {stylesheet._Vector_25} fill = {"rgba(56, 56, 56, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0.14109111648570127 0.96364010535036 C -0.028952912746397524 1.1000383925024833 -0.04476100645893455 1.356706454646651 0.09078287063792825 1.5274980745800988 L 0.6592340593547864 2.243776070726079 C 0.7977686605838721 2.4183060935621676 1.054223280999026 2.455369701092578 1.2265103402917694 2.313951233784222 C 1.7553344538144586 1.8800829001319088 2.4280338647204767 1.6167924981974624 3.1641792475518993 1.6167924981974624 C 3.800028560377706 1.6167924981974624 4.385355789067817 1.81770495133653 4.874232373110101 2.151918170832619 C 5.0447036747238485 2.268342731410519 5.279475479987774 2.2178208864691156 5.407863007559577 2.05610824501351 L 5.827418878679982 1.5274980745800988 C 5.962749119586021 1.356813266158155 5.946834233855117 1.0998247825179897 5.776897003160646 0.963533293838856 C 4.174402926169956 -0.3211955665315359 1.7435851934763913 -0.321195566531536 0.14109111648570127 0.96364010535036 L 0.14109111648570127 0.96364010535036 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {stylesheet._battery_1}>
						<View style = {stylesheet._Group_17}>
							<View style = {stylesheet._Group_18}>
								<Svg style = {stylesheet._Vector_26} fill = {"rgba(56, 56, 56, 1)"}>
								<Path fillRule = {"nonzero"} d = {"M 13.129294958223403 1.6457766138883851 L 13.129517238311706 1.5500324356414161 C 13.129517238311706 0.7107975280539464 12.431730568960065 0 11.604394164650763 0 L 1.5217874936908027 0 C 0.6805509482869737 0 0 0.6883350965428437 0 1.5295716384381326 L 0 6.136077868914095 C 0 6.977425603877902 0.6825525295783109 7.661869049072266 1.52378907498214 7.661869049072266 L 11.604394164650763 7.658198882438713 C 12.445741903123574 7.658198882438713 13.124957951309632 6.9738674787101465 13.124957951309632 6.132408550677821 L 13.124957951309632 6.016536995358634 C 13.56242319353342 6.015202581807525 14 5.624552689373837 14 5.144497428291942 L 14 2.5178157567564377 C 14 2.037871688743061 13.609127835169497 1.6471110274394936 13.129294958223403 1.6457766138883851 Z"}   strokeLinejoin = {"miter"}/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Component__icon_navigation_menu_24px
				variant1_left={315}
				variant1_right={"auto"}
				variant1_top={54}
				variant1_bottom={"auto"}
				variant1_transform={[{translateX: 0},{translateY: 0},{rotate: "0deg"},]}
			/>
			<Image style = {stylesheet._image_1} source = {{uri: imageUrl_image_1}}>
			</Image>
		</View>
		</ScrollView>
	)
}
const Component__icon_navigation_chevron_right_24px = ({
	variant1_left,
	variant1_right,
	variant1_top,
	variant1_bottom,
	variant1_transform,
}) => {
	return (
			<View style = {[
				component__icon_navigation_chevron_right_24px_stylesheet._icon_navigation_chevron_right_24px,
				{
					left: variant1_left,
					right: variant1_right,
					top: variant1_top,
					bottom: variant1_bottom,
					transform: variant1_transform,
				},
			]}>
				<Svg style = {component__icon_navigation_chevron_right_24px_stylesheet._icon_navigation_chevron_right_24px_3} fill = {"rgba(20, 101, 136, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 0.24374999811953427 0.24480178508661782 C -0.08124999937317809 0.5698017343056143 -0.08124999937317809 1.0948016923932686 0.24374999811953427 1.4198016416122652 L 3.477083545309237 4.653134584364021 L 0.24374999811953427 7.886467626456839 C -0.08124999937317809 8.211467575675835 -0.08124999937317809 8.73646740958716 0.24374999811953427 9.061467358806157 C 0.5687499956122466 9.386467308025153 1.0937500316805249 9.386467308025153 1.4187500291732371 9.061467358806157 L 5.2437501677800595 5.236467689002799 C 5.568750165272772 4.911467739783802 5.568750165272772 4.386467905872477 5.2437501677800595 4.06146795665348 L 1.4187500291732371 0.2364684606969817 C 1.1020833573079474 -0.08019816413237865 0.5687499956122466 -0.08019816413237868 0.24374999811953427 0.24480178508661782 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
	)
}
const Component__icon_navigation_menu_24px = ({
	variant1_left,
	variant1_right,
	variant1_top,
	variant1_bottom,
	variant1_transform,
}) => {
	return (
			<View style = {[
				component__icon_navigation_menu_24px_stylesheet._icon_navigation_menu_24px,
				{
					left: variant1_left,
					right: variant1_right,
					top: variant1_top,
					bottom: variant1_bottom,
					transform: variant1_transform,
				},
			]}>
				<View style = {component__icon_navigation_menu_24px_stylesheet._icon_navigation_menu_24px_2}>
				</View>
			</View>
	)
}

const stylesheet = StyleSheet.create({
	_Home_page: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 3151,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	_Hello_there__how_can_we_serve_you_today___: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 130,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "undefined",
		fontWeight: 400,
		textDecorationLine: "none",
		color: "rgba(19, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Categories: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 29,
		right: "auto",
		top: 719,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Featured_Products: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 1372,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Most_Purchased_Products: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 2065,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Our_Media_Associates: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 2758,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_VIEW_ALL: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 276,
		right: "auto",
		top: 723,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Ellipse_7: {
		position: "absolute",
		width: 9,
		height: 9,
		borderRadius: 1000,
		backgroundColor: "rgba(44, 105, 117, 1)",
		left: 169,
		right: "auto",
		top: 390,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_8: {
		position: "absolute",
		width: 9,
		height: 9,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 183,
		right: "auto",
		top: 390,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_9: {
		position: "absolute",
		width: 9,
		height: 9,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 196,
		right: "auto",
		top: 390,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Rectangle_102: {
		position: "absolute",
		width: 95,
		height: 95,
		borderRadius: 20,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 2833,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(224, 236, 222, 1)",
	},
	_Rectangle_105: {
		position: "absolute",
		width: 95,
		height: 95,
		borderRadius: 20,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 2943,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(224, 236, 222, 1)",
	},
	_Rectangle_103: {
		position: "absolute",
		width: 95,
		height: 95,
		borderRadius: 20,
		opacity: 1,
		left: 140,
		right: "auto",
		top: 2833,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(224, 236, 222, 1)",
	},
	_Rectangle_106: {
		position: "absolute",
		width: 95,
		height: 95,
		borderRadius: 20,
		opacity: 1,
		left: 140,
		right: "auto",
		top: 2943,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(224, 236, 222, 1)",
	},
	_Rectangle_104: {
		position: "absolute",
		width: 95,
		height: 95,
		borderRadius: 20,
		opacity: 1,
		left: 250,
		right: "auto",
		top: 2833,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(224, 236, 222, 1)",
	},
	_Rectangle_107: {
		position: "absolute",
		width: 95,
		height: 95,
		borderRadius: 20,
		opacity: 1,
		left: 250,
		right: "auto",
		top: 2943,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(224, 236, 222, 1)",
	},
	_image_6: {
		position: "absolute",
		width: 65,
		height: 65,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 2848,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_7: {
		position: "absolute",
		width: 65,
		height: 65,
		borderRadius: 0,
		opacity: 1,
		left: 155,
		right: "auto",
		top: 2848,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_8: {
		position: "absolute",
		width: 65,
		height: 65,
		borderRadius: 0,
		opacity: 1,
		left: 265,
		right: "auto",
		top: 2848,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_9: {
		position: "absolute",
		width: 65,
		height: 65,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 2958,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_10: {
		position: "absolute",
		width: 65,
		height: 65,
		borderRadius: 0,
		opacity: 1,
		left: 155,
		right: "auto",
		top: 2958,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_11: {
		position: "absolute",
		width: 65,
		height: 65,
		borderRadius: 0,
		opacity: 1,
		left: 265,
		right: "auto",
		top: 2958,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	___ND_Care_Nirogam_Pvt__Ltd____All_rights_Reserved: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 48,
		right: "auto",
		top: 3108,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_99: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 1437,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.20000000298023224,
		shadowRadius: 18,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_109: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 1633,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 5,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 24,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_110: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 1829,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 5,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 24,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_image_12: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 1437,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_13: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 1633,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_15: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 1829,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Cephalgo: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1452,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Stress_Care: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1648,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rishtpusht_Immuno: {
		position: "absolute",
		width: 200,
		height: "auto",
		left: 130,
		right: "auto",
		top: 1844,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_image_2: {
		position: "absolute",
		width: 65,
		height: 113,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 1452,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_14: {
		position: "absolute",
		width: 65,
		height: 113,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 1648,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_16: {
		position: "absolute",
		width: 65,
		height: 113,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 1844,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Line_27: {
		position: "absolute",
		width: 137,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 120,
		right: "auto",
		top: 1589,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
	},
	_Line_30: {
		position: "absolute",
		width: 137,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 120,
		right: "auto",
		top: 1785,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
	},
	_Line_34: {
		position: "absolute",
		width: 137,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 120,
		right: "auto",
		top: 1981,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
	},
	_Line_28: {
		position: "absolute",
		width: 200,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 130,
		right: "auto",
		top: 1563,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-3.5083563189621564e-15deg"},
		],
	},
	_Line_31: {
		position: "absolute",
		width: 200,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 130,
		right: "auto",
		top: 1759,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-3.5083563189621564e-15deg"},
		],
	},
	_Line_35: {
		position: "absolute",
		width: 200,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 130,
		right: "auto",
		top: 1955,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-3.5083563189621564e-15deg"},
		],
	},
	___214_00: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1539,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	___850_00: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1735,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	___2500_00: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1931,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_ADD_TO_CART: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1573,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_ADD_TO_CART_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1769,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_ADD_TO_CART_3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 1965,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst_: {
		position: "absolute",
		width: 200,
		height: 57,
		left: 130,
		right: "auto",
		top: 1477,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__2: {
		position: "absolute",
		width: 200,
		height: 57,
		left: 130,
		right: "auto",
		top: 1673,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__3: {
		position: "absolute",
		width: 200,
		height: 57,
		left: 130,
		right: "auto",
		top: 1869,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_40_capsules: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 1575,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_40_capsules_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 1771,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_40_capsules_3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 1967,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bi_share_fill: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 0,
		overflow: "hidden",
		left: 315,
		right: "auto",
		top: 1573,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group: {
		position: "absolute",
		width: 15.000247955322266,
		height: 15.002100944519043,
		transform: [
			{translateX: -0.000244140625},
			{translateY: -0.00030517578125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 15.002100944519043,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_bi_share_fill_2: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 0,
		overflow: "hidden",
		left: 315,
		right: "auto",
		top: 1769,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_2: {
		position: "absolute",
		width: 15.000247955322266,
		height: 15.002100944519043,
		transform: [
			{translateX: -0.000244140625},
			{translateY: -0.00030517578125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 15.002100944519043,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_bi_share_fill_3: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 0,
		overflow: "hidden",
		left: 315,
		right: "auto",
		top: 1965,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_3: {
		position: "absolute",
		width: 15.000247955322266,
		height: 15.002100944519043,
		transform: [
			{translateX: -0.000244140625},
			{translateY: -0.00030517578125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_3: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 15.002100944519043,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Rectangle_111: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 2130,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 5,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 24,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_112: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 2326,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 5,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 24,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_113: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 2522,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 5,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 24,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_image_17: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 2130,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_18: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 2326,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_19: {
		position: "absolute",
		width: 315,
		height: 166,
		borderRadius: 10,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 2522,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Cephalgo_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2145,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Stress_Care_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2341,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rishtpusht_Immuno_2: {
		position: "absolute",
		width: 200,
		height: "auto",
		left: 130,
		right: "auto",
		top: 2537,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_image_20: {
		position: "absolute",
		width: 65,
		height: 113,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 2145,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_21: {
		position: "absolute",
		width: 65,
		height: 113,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 2341,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_22: {
		position: "absolute",
		width: 65,
		height: 113,
		borderRadius: 0,
		opacity: 1,
		left: 45,
		right: "auto",
		top: 2537,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Line_36: {
		position: "absolute",
		width: 137,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 120,
		right: "auto",
		top: 2282,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
	},
	_Line_37: {
		position: "absolute",
		width: 137,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 120,
		right: "auto",
		top: 2478,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
	},
	_Line_38: {
		position: "absolute",
		width: 137,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 120,
		right: "auto",
		top: 2674,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
	},
	_Line_39: {
		position: "absolute",
		width: 200,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 130,
		right: "auto",
		top: 2256,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-3.5083563189621564e-15deg"},
		],
	},
	_Line_40: {
		position: "absolute",
		width: 200,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 130,
		right: "auto",
		top: 2452,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-3.5083563189621564e-15deg"},
		],
	},
	_Line_41: {
		position: "absolute",
		width: 200,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(44, 105, 117, 1)",
		left: 130,
		right: "auto",
		top: 2648,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-3.5083563189621564e-15deg"},
		],
	},
	___214_00_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2232,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	___850_00_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2428,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	___2500_00_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2624,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_ADD_TO_CART_4: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2266,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_ADD_TO_CART_5: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2462,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_ADD_TO_CART_6: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 130,
		right: "auto",
		top: 2658,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 14,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__4: {
		position: "absolute",
		width: 200,
		height: 57,
		left: 130,
		right: "auto",
		top: 2170,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__5: {
		position: "absolute",
		width: 200,
		height: 57,
		left: 130,
		right: "auto",
		top: 2366,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Commodo_sit_quam_aliquam_in_ut_hac_malesuada_fringilla_lobortis__Aenean_id_potenti_blandit_tempor_aliquam_etiam_duis_consectetur__Quam_malesuada_tristique_aliquet_donec_sem_rhoncus_egestas_dictumst__6: {
		position: "absolute",
		width: 200,
		height: 57,
		left: 130,
		right: "auto",
		top: 2562,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_40_capsules_4: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 2268,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_40_capsules_5: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 2464,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_40_capsules_6: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 2660,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bi_share_fill_4: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 0,
		overflow: "hidden",
		left: 315,
		right: "auto",
		top: 2266,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_4: {
		position: "absolute",
		width: 15.000247955322266,
		height: 15.002100944519043,
		transform: [
			{translateX: -0.000244140625},
			{translateY: -0.0003662109375},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_4: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 15.002100944519043,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_bi_share_fill_5: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 0,
		overflow: "hidden",
		left: 315,
		right: "auto",
		top: 2462,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_5: {
		position: "absolute",
		width: 15.000247955322266,
		height: 15.002100944519043,
		transform: [
			{translateX: -0.000244140625},
			{translateY: -0.0003662109375},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_5: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 15.002100944519043,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_bi_share_fill_6: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 0,
		overflow: "hidden",
		left: 315,
		right: "auto",
		top: 2658,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_6: {
		position: "absolute",
		width: 15.000247955322266,
		height: 15.002100944519043,
		transform: [
			{translateX: -0.000244140625},
			{translateY: -0.0003662109375},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_6: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 15.002100944519043,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Rectangle_114: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 58,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 58,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 784,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.20000000298023224,
		shadowRadius: 18,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_117: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 58,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 58,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 1058,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.20000000298023224,
		shadowRadius: 18,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_115: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 58,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 58,
		opacity: 1,
		left: 345,
		right: "auto",
		top: 1028,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.000005008956130975337deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.20000000298023224,
		shadowRadius: 18,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_119: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 58,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 58,
		opacity: 1,
		left: 345,
		right: "auto",
		top: 1302,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.000005008956130975337deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.20000000298023224,
		shadowRadius: 18,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_image_23: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 58,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 58,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 784,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_25: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 58,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 58,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 1058,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_24: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 58,
		borderBottomRightRadius: 58,
		borderBottomLeftRadius: 0,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 921,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.000010017912261950715deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_image_26: {
		position: "absolute",
		width: 315,
		height: 107,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 58,
		borderBottomRightRadius: 58,
		borderBottomLeftRadius: 0,
		opacity: 0.20000000298023224,
		left: 30,
		right: "auto",
		top: 1195,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.000010017912261950715deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_JOINT_CARE: {
		position: "absolute",
		width: 184,
		height: "auto",
		left: 146,
		right: "auto",
		top: 795,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_IMMUNITY_BOOSTERS: {
		position: "absolute",
		width: 184,
		height: "auto",
		left: 146,
		right: "auto",
		top: 1069,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_EXPLORE: {
		position: "absolute",
		width: 69,
		height: "auto",
		left: 234,
		right: "auto",
		top: 870,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_EXPLORE_2: {
		position: "absolute",
		width: 69,
		height: "auto",
		left: 234,
		right: "auto",
		top: 1144,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_33: {
		position: "absolute",
		width: 85,
		height: 85,
		borderRadius: 50,
		opacity: 1,
		left: 41,
		right: "auto",
		top: 795,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_118: {
		position: "absolute",
		width: 85,
		height: 85,
		borderRadius: 50,
		opacity: 1,
		left: 41,
		right: "auto",
		top: 1069,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_116: {
		position: "absolute",
		width: 85,
		height: 85,
		borderRadius: 50,
		opacity: 1,
		left: 249,
		right: "auto",
		top: 932,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_120: {
		position: "absolute",
		width: 85,
		height: 85,
		borderRadius: 50,
		opacity: 1,
		left: 249,
		right: "auto",
		top: 1206,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis_: {
		position: "absolute",
		width: 184,
		height: 64,
		left: 146,
		right: "auto",
		top: 816,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__2: {
		position: "absolute",
		width: 184,
		height: 64,
		left: 146,
		right: "auto",
		top: 1090,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_icon_navigation_chevron_right_24px: {
		position: "absolute",
		width: 20,
		height: 20,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_icon_navigation_chevron_right_24px_2: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 9.305217742919922,
		borderRadius: 0,
		left: 7.2562255859375,
		right: 7.256274223327637,
		transform: [
			{translateX: 0},
			{translateY: 5.3473968505859375},
			{rotate: "0deg"},
		],
	},
	_Group_15: {
		position: "absolute",
		width: 184,
		height: 91,
		transform: [
			{translateX: 45},
			{translateY: 932},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_KIDNEY_CARE: {
		position: "absolute",
		width: 184,
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_EXPLORE_3: {
		position: "absolute",
		width: 69,
		height: "auto",
		left: 88,
		right: "auto",
		top: 75,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__3: {
		position: "absolute",
		width: 184,
		height: 64,
		left: 0,
		right: "auto",
		top: 21,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Group_16: {
		position: "absolute",
		width: 184,
		height: 91,
		transform: [
			{translateX: 45},
			{translateY: 1206},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_KIDNEY_CARE_2: {
		position: "absolute",
		width: 184,
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_EXPLORE_4: {
		position: "absolute",
		width: 69,
		height: "auto",
		left: 88,
		right: "auto",
		top: 75,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 12,
		color: "rgba(20, 101, 136, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Turpis_nunc_nibh_condimentum_viverra_pharetra_leo_sed__Tempus__ut_a_congue_elementum_vivamus__Elementum_sodales_fermentum__diam_ultricies_quis__4: {
		position: "absolute",
		width: 184,
		height: 64,
		left: 0,
		right: "auto",
		top: 21,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 10,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_121: {
		position: "absolute",
		width: 100,
		height: 105,
		borderRadius: 20,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 449,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(45, 105, 116, 1)",
	},
	_Rectangle_124: {
		position: "absolute",
		width: 100,
		height: 105,
		borderRadius: 20,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 564,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(45, 105, 116, 1)",
	},
	_bi_list_ol: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 64,
		right: "auto",
		top: 464,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_7: {
		position: "absolute",
		width: 28,
		height: 21.42799949645996,
		transform: [
			{translateX: 2},
			{translateY: 4.66802978515625},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_7: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 18,
		borderRadius: 0,
		left: 8,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 1.33197021484375},
			{rotate: "0deg"},
		],
	},
	_Vector_8: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 21.42799949645996,
		borderRadius: 0,
		left: 0,
		right: 23.872000217437744,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_My_Orders: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 51,
		right: "auto",
		top: 511,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Chat: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 66,
		right: "auto",
		top: 626,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_122: {
		position: "absolute",
		width: 100,
		height: 105,
		borderRadius: 20,
		opacity: 1,
		left: 137,
		right: "auto",
		top: 449,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(45, 105, 116, 1)",
	},
	_Rectangle_125: {
		position: "absolute",
		width: 100,
		height: 105,
		borderRadius: 20,
		opacity: 1,
		left: 137,
		right: "auto",
		top: 564,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(45, 105, 116, 1)",
	},
	_Track_Order: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 154,
		right: "auto",
		top: 511,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Refer_Patient: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 167,
		right: "auto",
		top: 626,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_123: {
		position: "absolute",
		width: 100,
		height: 105,
		borderRadius: 20,
		opacity: 1,
		left: 244,
		right: "auto",
		top: 449,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(45, 105, 116, 1)",
	},
	_Rectangle_126: {
		position: "absolute",
		width: 100,
		height: 105,
		borderRadius: 20,
		opacity: 1,
		left: 244,
		right: "auto",
		top: 564,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(45, 105, 116, 1)",
	},
	_Best_Offers: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 262,
		right: "auto",
		top: 511,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Make_Payment: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 269,
		right: "auto",
		top: 626,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Nunito",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_delivery_route_track_1: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 171,
		right: "auto",
		top: 464,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_9: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 24.00201988220215,
		borderRadius: 0,
		left: 1.998870849609375,
		right: 2.0000076293945312,
		transform: [
			{translateX: 0},
			{translateY: 3.99798583984375},
			{rotate: "0deg"},
		],
	},
	_tabler_discount_2: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 278,
		right: "auto",
		top: 464,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_8: {
		position: "absolute",
		width: 23.996646881103516,
		height: 23.996646881103516,
		transform: [
			{translateX: 4.0150146484375},
			{translateY: 4.0150146484375},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_10: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 8,
		borderRadius: 0,
		left: 7.9849853515625,
		right: 8.011661529541016,
		transform: [
			{translateX: 0},
			{translateY: 7.9849853515625},
			{rotate: "0deg"},
		],
	},
	_Vector_11: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 1.3333320617675781,
		borderRadius: 0,
		left: 7.9849853515625,
		right: 14.678329467773438,
		transform: [
			{translateX: 0},
			{translateY: 7.9849853515625},
			{rotate: "0deg"},
		],
	},
	_Vector_12: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 1.333333969116211,
		borderRadius: 0,
		left: 14.65167236328125,
		right: 8.011640548706055,
		transform: [
			{translateX: 0},
			{translateY: 14.65167236328125},
			{rotate: "0deg"},
		],
	},
	_Vector_13: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 23.996646881103516,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_fluent_chat_multiple_20_regular: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 64,
		right: "auto",
		top: 579,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_9: {
		position: "absolute",
		width: 25.654218673706055,
		height: 25.77779769897461,
		transform: [
			{translateX: 3.203277587890625},
			{translateY: 3.20001220703125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_14: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 25.77779769897461,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_refer_1: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		opacity: 1,
		left: 171,
		right: "auto",
		top: 579,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_fluent_payment_16_regular: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 278,
		right: "auto",
		top: 579,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_10: {
		position: "absolute",
		width: 28,
		height: 20,
		transform: [
			{translateX: 2},
			{translateY: 6},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_15: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 2,
		borderRadius: 0,
		left: 18,
		right: 4,
		transform: [
			{translateX: 0},
			{translateY: 14},
			{rotate: "0deg"},
		],
	},
	_Vector_16: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 20,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Frame_3: {
		position: "absolute",
		width: 354,
		height: 174,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		top: 216,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_65: {
		position: "absolute",
		width: 315,
		height: 154,
		borderRadius: 20,
		opacity: 1,
		borderWidth: 5,
		borderColor: "rgba(112, 61, 70, 1)",
		left: 26,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 17,
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_63: {
		position: "absolute",
		width: 315,
		height: 154,
		borderRadius: 20,
		opacity: 1,
		borderWidth: 5,
		borderColor: "rgba(112, 61, 70, 1)",
		left: 401,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 17,
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_64: {
		position: "absolute",
		width: 315,
		height: 154,
		borderRadius: 20,
		opacity: 1,
		borderWidth: 5,
		borderColor: "rgba(112, 61, 70, 1)",
		left: 776,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 17,
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Ellipse_6: {
		position: "absolute",
		width: 60,
		height: 60,
		borderRadius: 1000,
		backgroundColor: "rgba(44, 105, 117, 1)",
		left: 285,
		right: "auto",
		top: "auto",
		bottom: 30,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(20, 101, 136)",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15000000596046448,
		shadowRadius: 10,
	},
	_ion_bag_handle: {
		position: "absolute",
		width: 30,
		height: 30,
		borderRadius: 0,
		overflow: "hidden",
		left: 300,
		right: "auto",
		top: "auto",
		bottom: 45,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_17: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 26.25,
		borderRadius: 0,
		left: 2.8125,
		right: 2.812490463256836,
		transform: [
			{translateX: 0},
			{translateY: 1.875},
			{rotate: "0deg"},
		],
	},
	_status_bar: {
		position: "absolute",
		width: 375,
		height: 100,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.15000000596046448,
		shadowRadius: 10,
	},
	_Rectangle_29: {
		position: "absolute",
		width: 375,
		height: 100,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_9_41: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 29,
		right: "auto",
		top: 10,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Product Sans",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(56, 56, 56, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Group_2: {
		position: "absolute",
		width: 52,
		height: 14,
		transform: [
			{translateX: 302},
			{translateY: 10},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_signal_1: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_11: {
		position: "absolute",
		width: 2.624997138977051,
		height: 8.166666030883789,
		transform: [
			{translateX: 10.79168701171875},
			{translateY: 2.9168701171875},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_18: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 8.166666030883789,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Group_12: {
		position: "absolute",
		width: 2.624999523162842,
		height: 7.000003814697266,
		transform: [
			{translateX: 7.29168701171875},
			{translateY: 4.083251953125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_19: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 7.000003814697266,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Group_13: {
		position: "absolute",
		width: 2.6249969005584717,
		height: 5.250105857849121,
		transform: [
			{translateX: 3.79168701171875},
			{translateY: 5.833251953125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_20: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 5.250105857849121,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Group_14: {
		position: "absolute",
		width: 2.6249899864196777,
		height: 3.499897003173828,
		transform: [
			{translateX: 0.29168701171875},
			{translateY: 7.583251953125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_21: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 3.499897003173828,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_wifi_1: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		overflow: "hidden",
		left: 19,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_22: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 2.4609375,
		borderRadius: 0,
		left: 5.76953125,
		right: 5.76953125,
		transform: [
			{translateX: 0},
			{translateY: 10.714111328125},
			{rotate: "0deg"},
		],
	},
	_Vector_23: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 3.8343863487243652,
		borderRadius: 0,
		left: 0,
		right: -0.0000133514404296875,
		transform: [
			{translateX: 0},
			{translateY: 0.875},
			{rotate: "0deg"},
		],
	},
	_Vector_24: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 3.12599515914917,
		borderRadius: 0,
		left: 2.0054931640625,
		right: 2.006265640258789,
		transform: [
			{translateX: 0},
			{translateY: 4.1553955078125},
			{rotate: "0deg"},
		],
	},
	_Vector_25: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 2.4007320404052734,
		borderRadius: 0,
		left: 4.0408935546875,
		right: 4.041117191314697,
		transform: [
			{translateX: 0},
			{translateY: 7.456298828125},
			{rotate: "0deg"},
		],
	},
	_battery_1: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		overflow: "hidden",
		left: 38,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Group_17: {
		position: "absolute",
		width: 14,
		height: 7.661869049072266,
		transform: [
			{translateX: 0},
			{translateY: 3.1690673828125},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_18: {
		position: "absolute",
		width: 14,
		height: 7.661869049072266,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_26: {
		position: "absolute",
		color: "rgba(56, 56, 56, 1)",
		width: "auto",
		height: 7.661869049072266,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_image_1: {
		position: "absolute",
		width: 108,
		height: 30,
		borderRadius: 0,
		opacity: 1,
		left: 29,
		right: "auto",
		top: 54,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});
const component__icon_navigation_chevron_right_24px_stylesheet = StyleSheet.create({
	_icon_navigation_chevron_right_24px: {
		position: "absolute",
		width: 20,
		height: 20,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_icon_navigation_chevron_right_24px_3: {
		position: "absolute",
		color: "rgba(20, 101, 136, 1)",
		width: "auto",
		height: 9.305217742919922,
		borderRadius: 0,
		left: 7.2562255859375,
		right: 7.256274223327637,
		transform: [
			{translateX: 0},
			{translateY: 5.3473968505859375},
			{rotate: "0deg"},
		],
	},
});
const component__icon_navigation_menu_24px_stylesheet = StyleSheet.create({
	_icon_navigation_menu_24px: {
		position: "absolute",
		width: 30,
		height: 30,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_icon_navigation_menu_24px_2: {
		position: "absolute",
		width: 26.25,
		height: 16.25,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 6.25},
			{rotate: "0deg"},
		],
	},
});

const imageUrl_image_6 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/94eeff14ad0cb06ff43b9471751c45c6"
const imageUrl_image_8 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/9b165c9cc3f91dc3db3ec7b3d456fb1b"
const imageUrl_image_20 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/100e8f3a71af2f735c7c43d717ae8483"
const imageUrl_image_11 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/f5087b8867a83fadef274741c9e226e1"
const imageUrl_image_15 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c993d4c31e46f908ee8b8815c51eee89"
const imageUrl_image_25 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d6c36c5df0325db5ce92d4dafa40a26b"
const imageUrl_Rectangle_33 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/4d5b3b6bb6c93be1fba34b6e17f73dd3"
const imageUrl_image_26 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d5c7fd3083decb16d04147ed6cf795ff"
const imageUrl_image_18 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/9c49d7a6fda726f169bb0cf8f16448b9"
const imageUrl_image_19 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/6d18cd5d17aedbd061fc77a798ecc67f"
const imageUrl_image_13 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/1e0782f25ea490b08a973bc3b07ac040"
const imageUrl_image_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d9360bf0e415bde104216f2ed69d4476"
const imageUrl_Rectangle_120 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/6e8b165f1ef42266991eb561d5046dfe"
const imageUrl_Rectangle_64 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/4a608591b704bfac0b77031ac65684d7"
const imageUrl_Rectangle_63 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/558951269dbdb7ad2723baad85d4975f"
const imageUrl_image_24 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5478b5675638e9f5c8952558b25b5881"
const imageUrl_image_21 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/ab2a72396a103c76eca17cf36aa344ff"
const imageUrl_image_16 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c1cce2f06b4a8280a8328e03d74b9c63"
const imageUrl_image_17 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/aafa823ac6dc6c9ef45d97afd118e226"
const imageUrl_image_10 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/4ad7b863bf596726ef01ae902e1a81bb"
const imageUrl_image_9 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/37476377d3432acd466c0763bfcc3d91"
const imageUrl_image_23 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/7318ebf96fd02d4f402abba6430f28ef"
const imageUrl_refer_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/73a6e80bdb9e19cd8446173712b27117"
const imageUrl_image_7 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d46480491ab86e7b1446e1209aaff377"
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/791d59d3919e2476ffad784c793dc174"
const imageUrl_Rectangle_65 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/bc4d465f9c9f1ea1bd1e5e574827b6f0"
const imageUrl_image_22 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/3b83fec1dbe3c43101bafd2318199dd8"
const imageUrl_Rectangle_118 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/0cb88f44d56c792aa135ffa69ea28a57"
const imageUrl_Rectangle_116 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/6e61a12b0063bc9ece7586bd67a72627"
const imageUrl_image_14 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5b96fe1259928ebac66725152ac21518"
const imageUrl_image_12 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d570802fdd3aa14500a8dd396a4310f4"
