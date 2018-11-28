import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('upvote should emit an issue', () => {
    let totalVotes = null;
    component.voteChanged.subscribe( tv => { totalVotes = tv; } );
    component.upVote();
    expect( totalVotes).not.toBeNull();
    expect( totalVotes).not.toBe( null);
    expect( totalVotes).toBe( 1);
  });
});
