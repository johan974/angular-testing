import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent : VoteComponent;
  beforeEach( () => {
    voteComponent = new VoteComponent();
  })
  it('upvote increments votes', () => {
    voteComponent.upVote();
    expect( voteComponent.totalVotes).toBe( 1);
  });

  it('downvote decreases votes', () => {
    voteComponent.upVote();
    expect( voteComponent.totalVotes).toBe( 1);
    voteComponent.downVote();
    expect( voteComponent.totalVotes).toBe( 0);
  });
});
